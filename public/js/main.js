// --- Riferimenti Elementi HTML Essenziali ---
const pianoKeys = document.querySelectorAll('.key');
const midiInputSelect = document.getElementById('midi-input-select');
const midiStatusDisplay = document.getElementById('midi-status');

// --- Riferimenti Elementi HTML Quiz Coordinazione ---
const startExerciseBtn = document.getElementById('start-exercise-btn');
const stopCoordinationQuizBtn = document.getElementById('stop-coordination-quiz-btn');
const coordinationBpmSelect = document.getElementById('coordination-bpm-select');
const coordinationExerciseSelect = document.getElementById('coordination-exercise-select');
const coordinationQuizStatusDisplay = document.getElementById('coordination-quiz-status');
const coordinationQuizScoreDisplay = document.getElementById('coordination-quiz-score-display');

// --- Riferimenti Elementi HTML Pentagramma ---
const staffContainer = document.getElementById('staff-container');
const svg = document.getElementById('music-staff');
const staffLinesGroup = document.getElementById('staff-lines');
const notesLayer = document.getElementById('notes-layer');

// --- Variabili Globali Essenziali ---
let audioContext = null;
let midiAccess = null;
let selectedMidiInput = null;
const SVG_NS = "http://www.w3.org/2000/svg";

// --- Costanti Pentagramma ---
const STAFF_HEIGHT_PER_SYSTEM = 180;
const LINE_SPACING = 10;
const STAFF_MARGIN_TOP = 40;
const STAFF_GAP = 50;
const TREBLE_STAFF_Y_BASE = STAFF_MARGIN_TOP;
const BASS_STAFF_Y_BASE = TREBLE_STAFF_Y_BASE + 4 * LINE_SPACING + STAFF_GAP;
const START_X = 60;
const END_MARGIN = 30;
const BEAT_WIDTH_STAFF = 45;
const ACCIDENTAL_OFFSET_X = -15;

// --- Funzioni MIDI Base ---
function initializeMIDI() { if (navigator.requestMIDIAccess) { navigator.requestMIDIAccess({ sysex: false }).then(onMIDISuccess, onMIDIFailure); } else { midiStatusDisplay.textContent = "Web MIDI non supportato!"; midiStatusDisplay.style.color = 'red'; midiInputSelect.disabled = true; } }
function onMIDISuccess(midiAccessObject) { midiAccess = midiAccessObject; listMidiInputs(); midiAccess.onstatechange = onMidiStateChange; }
function onMIDIFailure(error) { console.error("Accesso MIDI fallito:", error); midiStatusDisplay.textContent = "Accesso MIDI fallito!"; midiStatusDisplay.style.color = 'red'; midiInputSelect.disabled = true; }
function listMidiInputs() { if (!midiAccess) return; const inputs = midiAccess.inputs.values(); midiInputSelect.innerHTML = ''; let foundDevice = false; for (let input = inputs.next(); input && !input.done; input = inputs.next()) { const midiInput = input.value; const option = document.createElement('option'); option.value = midiInput.id; option.textContent = midiInput.name; midiInputSelect.appendChild(option); foundDevice = true; } if (foundDevice) { midiInputSelect.disabled = false; midiStatusDisplay.textContent = "Seleziona dispositivo"; startListeningToMidi(); } else { midiInputSelect.disabled = true; midiStatusDisplay.textContent = "Nessun input MIDI"; midiStatusDisplay.style.color = 'orange'; } }
function onMidiStateChange(event) { listMidiInputs(); if (selectedMidiInput && selectedMidiInput.state === 'connected') { startListeningToMidi(); } else { if(selectedMidiInput && selectedMidiInput.id === event.port.id && event.port.state === 'disconnected') { selectedMidiInput = null; midiStatusDisplay.textContent = "Dispositivo scollegato"; midiStatusDisplay.style.color = 'orange'; } } }
function startListeningToMidi() {
    if (!midiAccess) return;
    const selectedDeviceId = midiInputSelect.value;
    if (!selectedDeviceId) { midiStatusDisplay.textContent = "Nessun dispositivo valido"; return; }
    if (selectedMidiInput && selectedMidiInput.onmidimessage) { selectedMidiInput.onmidimessage = null; selectedMidiInput = null; }
    selectedMidiInput = midiAccess.inputs.get(selectedDeviceId);
    if (selectedMidiInput) {
        selectedMidiInput.onmidimessage = routeMidiMessage;
        midiStatusDisplay.textContent = `Ascoltando ${selectedMidiInput.name.substring(0, 15)}...`;
        midiStatusDisplay.style.color = 'green';
    } else {
        midiStatusDisplay.textContent = "Dispositivo non trovato";
        midiStatusDisplay.style.color = 'red';
    }
}

// --- Funzioni Audio Base ---
function midiToFreq(midi) { return Math.pow(2, (midi - 69) / 12) * 440; }
function initAudioContext() { if (audioContext) { if (audioContext.state === 'suspended') { audioContext.resume().then(() => { console.log("AudioContext ripreso."); }).catch(err => { console.error("Errore nel riprendere AudioContext:", err); }); } return; } try { window.AudioContext = window.AudioContext || window.webkitAudioContext; audioContext = new AudioContext(); console.log("AudioContext creato con successo. L'audio è pronto."); } catch (e) { console.error("Web Audio API non supportata in questo browser.", e); alert("Il tuo browser non supporta la Web Audio API, i suoni non funzioneranno."); } }
function playNoteSound(midiNumber, velocity = 100) { if (!audioContext) { console.warn("AudioContext non ancora inizializzato."); return; } if (audioContext.state === 'suspended') { audioContext.resume(); } if (audioContext.state !== 'running') { console.warn("AudioContext non è in stato 'running'. Impossibile riprodurre."); return; } try { const now = audioContext.currentTime; const freq = midiToFreq(midiNumber); const oscillator = audioContext.createOscillator(); oscillator.type = 'triangle'; oscillator.frequency.setValueAtTime(freq, now); const gainNode = audioContext.createGain(); const maxGain = Math.max(0.05, Math.min(0.6, velocity / 127)); const attackTime = 0.01; const decayTime = 0.15; const sustainLevelRatio = 0.1; const releaseTime = 0.2; gainNode.gain.setValueAtTime(0, now); gainNode.gain.linearRampToValueAtTime(maxGain, now + attackTime); gainNode.gain.linearRampToValueAtTime(sustainLevelRatio * maxGain, now + attackTime + decayTime); oscillator.connect(gainNode); gainNode.connect(audioContext.destination); oscillator.start(now); const stopTime = now + attackTime + decayTime + releaseTime; gainNode.gain.linearRampToValueAtTime(0.0001, stopTime); oscillator.stop(stopTime + 0.05); } catch (error) { console.error(`Errore durante la sintesi del suono per MIDI ${midiNumber}:`, error); } }

// --- Funzioni Helper MIDI/Note Base ---
const note_names_quiz = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si"];
function midiToNoteNameQuiz(midi_note) { if (midi_note < 0 || midi_note > 127) return "N/A"; const note_index = midi_note % 12; const octave = Math.floor(midi_note / 12) - 1; return `${note_names_quiz[note_index]}${octave}`; }
const midiNoteNamesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const midiNoteNamesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
function midiToNoteDetails(midi, preference = 'sharp') { const octave = Math.floor(midi / 12) - 1; const noteIndex = midi % 12; const noteNameArray = (preference === 'flat') ? midiNoteNamesFlat : midiNoteNamesSharp; const noteName = noteNameArray[noteIndex]; const letter = noteName[0]; const accidental = noteName.length > 1 ? noteName.substring(1) : null; return { midi, octave, noteIndex, noteName, letter, accidental, preference }; }
const noteNameToStep = { 'c': 0, 'd': 1, 'e': 2, 'f': 3, 'g': 4, 'a': 5, 'b': 6 };
function getDiatonicStepsFromC0(midi, preference = 'sharp') { const details = midiToNoteDetails(midi, preference); const octaveSteps = (details.octave) * 7; const baseStepsWithinOctave = noteNameToStep[details.letter.toLowerCase()]; return octaveSteps + baseStepsWithinOctave; }

// --- Funzioni Disegno Pentagramma (IN ORDINE CORRETTO) ---
function createSvgElement(name, attributes) { const element = document.createElementNS(SVG_NS, name); for (const key in attributes) { element.setAttributeNS(null, key, attributes[key]); } return element; }

function drawStaffSystemHelper(yOffset, width) {
    staffLinesGroup.innerHTML = '';
    const systemGroup = createSvgElement('g', { transform: `translate(0, ${yOffset})` });
    staffLinesGroup.appendChild(systemGroup);
    function drawPentagramLines(baseY) { for (let i = 0; i < 5; i++) { const y = baseY + i * LINE_SPACING; const line = createSvgElement('line', { x1: 10, y1: y, x2: width - 10, y2: y, class: 'staff-line' }); systemGroup.appendChild(line); } }
    drawPentagramLines(TREBLE_STAFF_Y_BASE); drawPentagramLines(BASS_STAFF_Y_BASE);
    const connectLine = createSvgElement('line', { x1: 15, y1: TREBLE_STAFF_Y_BASE, x2: 15, y2: BASS_STAFF_Y_BASE + 4 * LINE_SPACING, class: 'staff-line', 'stroke-width': 1.5 }); systemGroup.appendChild(connectLine);
    const trebleClef = createSvgElement('text', { x: 25, y: TREBLE_STAFF_Y_BASE + 1.5 * LINE_SPACING, 'font-size': LINE_SPACING * 4.5, class: 'clef' }); trebleClef.textContent = '𝄞'; systemGroup.appendChild(trebleClef);
    const bassClef = createSvgElement('text', { x: 25, y: BASS_STAFF_Y_BASE + 1 * LINE_SPACING, 'font-size': LINE_SPACING * 3.5, class: 'clef' }); bassClef.textContent = '𝄢'; systemGroup.appendChild(bassClef);
    const finalBarline = createSvgElement('line', { x1: width - 10, y1: TREBLE_STAFF_Y_BASE, x2: width - 10, y2: BASS_STAFF_Y_BASE + 4 * LINE_SPACING, class: 'staff-line', 'stroke-width': 1.5 }); systemGroup.appendChild(finalBarline);
}

function midiToYPositionRelativeToContext(midi, contextClef, preference = 'sharp') {
    const stepsFromC0 = getDiatonicStepsFromC0(midi, preference);
    let referenceSteps, referenceY;

    if (contextClef === 'treble') {
        // Riferimento: G4 (Sol4, MIDI 67) sulla seconda linea dal basso
        referenceSteps = getDiatonicStepsFromC0(67, preference); // G4
        referenceY = TREBLE_STAFF_Y_BASE + 3 * LINE_SPACING;
    } else if (contextClef === 'bass') {
        // Riferimento: F3 (Fa3, MIDI 53) sulla quarta linea dal basso
        referenceSteps = getDiatonicStepsFromC0(53, preference); // F3
        referenceY = BASS_STAFF_Y_BASE + 1 * LINE_SPACING;
    } else {
        console.error("Clef non valida:", contextClef);
        return null;
    }

    const stepDifference = stepsFromC0 - referenceSteps;
    const yPosition = referenceY - (stepDifference * (LINE_SPACING / 2));
    
    const staffYBase = (contextClef === 'treble') ? TREBLE_STAFF_Y_BASE : BASS_STAFF_Y_BASE;
    const middleLineY = staffYBase + 2 * LINE_SPACING;
    const stemUp = yPosition >= middleLineY;

    return { yBase: yPosition, stemUp: stemUp };
}

function drawLedgerLines(x, y, contextClef, yOffset) {
    const ledgerGroup = createSvgElement('g', { class: 'ledger-lines' });
    const ledgerWidth = LINE_SPACING * 1.8; const noteHeadRadius = LINE_SPACING / 2.5;
    const staffTopY = ((contextClef === 'treble') ? TREBLE_STAFF_Y_BASE : BASS_STAFF_Y_BASE) + yOffset;
    const staffBottomY = staffTopY + 4 * LINE_SPACING; const noteAbsoluteY = y + yOffset;
    let currentLineY = staffTopY - LINE_SPACING;
    while (currentLineY >= noteAbsoluteY - noteHeadRadius / 2) { const line = createSvgElement('line', { x1: x - ledgerWidth / 2, y1: currentLineY, x2: x + ledgerWidth / 2, y2: currentLineY, class: 'ledger-line' }); ledgerGroup.appendChild(line); currentLineY -= LINE_SPACING; }
    currentLineY = staffBottomY + LINE_SPACING;
    while (currentLineY <= noteAbsoluteY + noteHeadRadius / 2) { const line = createSvgElement('line', { x1: x - ledgerWidth / 2, y1: currentLineY, x2: x + ledgerWidth / 2, y2: currentLineY, class: 'ledger-line' }); ledgerGroup.appendChild(line); currentLineY += LINE_SPACING; }
    return ledgerGroup;
}

// ===== CORREZIONE: SPOSTATA PRIMA DI drawExerciseOnStaff =====
function drawNoteOnStaff(x, yData, midi, noteData, yOffset, contextClef, parentLayer = notesLayer) {
    const noteGroup = createSvgElement('g', { class: 'note-element', 'data-midi': midi });
    const yBase = yData.yBase;
    const stemUp = yData.stemUp;
    const yAbsolute = yBase + yOffset;

    let accidentalSymbol = '';
    if (noteData.accidental) {
        switch (noteData.accidental) { case 'sharp': case '#': accidentalSymbol = '♯'; break; case 'flat': case 'b': accidentalSymbol = '♭'; break; }
        if (accidentalSymbol) {
            const accidentalText = createSvgElement('text', { x: x + ACCIDENTAL_OFFSET_X, y: yAbsolute, class: 'note-accidental' });
            accidentalText.textContent = accidentalSymbol;
            noteGroup.appendChild(accidentalText);
        }
    }

    const ledgerLines = drawLedgerLines(x, yBase, contextClef, yOffset);
    noteGroup.appendChild(ledgerLines);

    const noteHeadRadius = LINE_SPACING / 2.5;
    const isQuarterOrShorter = noteData.duration <= 1.0;
    const noteHeadFill = isQuarterOrShorter ? 'black' : 'white';

    const noteHead = createSvgElement('ellipse', { 
        cx: x, cy: yAbsolute, rx: noteHeadRadius * 1.2, ry: noteHeadRadius, 
        fill: noteHeadFill, stroke: 'black', 'stroke-width': 1.5, class: 'note-head' 
    });
    noteHead.setAttributeNS(null, 'transform', `rotate(-15 ${x} ${yAbsolute})`);
    noteGroup.appendChild(noteHead);
    
    if (noteData.duration < 4.0) {
        const stemHeight = 3.5 * LINE_SPACING;
        const stemX = stemUp ? (x + noteHeadRadius * 1.1) : (x - noteHeadRadius * 1.1);
        const stemY2 = stemUp ? (yAbsolute - stemHeight) : (yAbsolute + stemHeight);
        
        const stem = createSvgElement('line', {
            x1: stemX, y1: yAbsolute, x2: stemX, y2: stemY2,
            class: 'note-stem'
        });
        noteGroup.appendChild(stem);

        if (noteData.duration <= 0.5) {
            const flagPath = stemUp 
                ? `M${stemX},${stemY2} c 5,-2 12,0 15,10 l -2,-1 c -3,-10 -10,-8 -13,-8 z` 
                : `M${stemX},${stemY2} c -5,2 -12,0 -15,-10 l 2,1 c 3,10 10,8 13,8 z`;
            
            const flag = createSvgElement('path', {
                d: flagPath,
                stroke: 'black', 'stroke-width': 1, fill: 'black'
            });
            noteGroup.appendChild(flag);
        }
    }
    
    parentLayer.appendChild(noteGroup);
    return { group: noteGroup };
}

function drawExerciseOnStaff(exercise) {
    if (!svg || !notesLayer || !exercise || !exercise.notes) return;
    notesLayer.innerHTML = '';
    let maxTime = 0;
    if (exercise.notes.length > 0) { maxTime = Math.max(...exercise.notes.map(n => n.time + n.duration)); }
    const requiredWidth = START_X + maxTime * BEAT_WIDTH_STAFF + END_MARGIN;
    svg.setAttribute('width', requiredWidth); svg.setAttribute('height', STAFF_HEIGHT_PER_SYSTEM);
    drawStaffSystemHelper(0, requiredWidth);

    notesInExerciseState.forEach(noteState => {
        const note = noteState;
        const contextClef = note.hand === 'left' ? 'bass' : 'treble';
        const yData = midiToYPositionRelativeToContext(note.midi, contextClef);
        if (!yData) { console.warn(`Impossibile calcolare Y per MIDI ${note.midi} in clef ${contextClef}`); return; }
        const xPos = START_X + note.time * BEAT_WIDTH_STAFF;
        const noteDetails = midiToNoteDetails(note.midi);
        const noteDrawData = { duration: note.duration, accidental: noteDetails.accidental };
        const noteDrawResult = drawNoteOnStaff(xPos, yData, note.midi, noteDrawData, 0, contextClef, notesLayer);
        noteState.svgElement = noteDrawResult.group;
    });
    console.log(`Esercizio "${exercise.name}" disegnato sul pentagramma.`);
}

function updateStaffHighlight(elapsedSeconds) {
    if (!isExerciseRunning) return;
    notesInExerciseState.forEach(noteState => {
        if (noteState.svgElement) {
            const noteStartTime = noteState.startTimeSeconds; const noteEndTime = noteState.endTimeSeconds;
            const isDue = elapsedSeconds >= noteStartTime && elapsedSeconds < noteEndTime;
            if (isDue) { noteState.svgElement.classList.add('staff-note-highlight'); }
            else { noteState.svgElement.classList.remove('staff-note-highlight'); }
        }
    });
}
function clearStaffHighlight() { notesInExerciseState.forEach(noteState => { if (noteState.svgElement) { noteState.svgElement.classList.remove('staff-note-highlight'); } }); }
function clearStaff() { notesLayer.innerHTML = ''; drawStaffSystemHelper(0, 900); }


// =====================================================
// === VARIABILI STATO QUIZ COORDINAZIONE =============
// =====================================================
let currentCoordinationExercise = null;
let coordinationQuizBPM = 80;
let coordinationQuizStartTime = 0;
let coordinationQuizCurrentBeat = 0;
let coordinationQuizIntervalId = null;
let coordinationQuizScore = 0;
let coordinationQuizStreak = 0;
let metronomeIntervalId = null;
const upcomingNoteLookahead = 0.5;
const timingTolerancePerfect = 0.15;
const timingToleranceGood = 0.30;
let notesInExerciseState = [];
const coordinationRepetitionTarget = 10;
let coordinationCurrentRepetition = 0;
let isExerciseRunning = false;

// =====================================================
// === INIZIO LOGICA QUIZ COORDINAZIONE MANI ==========
// =====================================================

function populateExerciseSelect() {
    coordinationExerciseSelect.innerHTML = '<option value="random">-- Seleziona un Esercizio --</option>';
    coordinationExercises.forEach((exercise, index) => {
        const option = document.createElement('option');
        option.value = index.toString();
        option.textContent = exercise.name;
        option.title = exercise.name;
        coordinationExerciseSelect.appendChild(option);
    });
}

function updateCoordinationScoreDisplay() {
    if (coordinationQuizScoreDisplay) {
        coordinationQuizScoreDisplay.textContent = `Punteggio: ${coordinationQuizScore} | Serie: ${coordinationQuizStreak}`;
    }
}

async function inviaStatisticheAlServer(nomeEsercizio, punteggioFinale, bpmUsati) {
    const idAlunno = "alunno_test_01"; 

    const dati = {
        id_alunno: idAlunno,
        nome_esercizio: nomeEsercizio,
        punteggio: punteggioFinale,
        bpm: bpmUsati
    };

    console.log("Invio statistiche al server:", dati);

    try {
        const response = await fetch('/api/salva_statistiche', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dati),
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Risposta dal server:", result.message);
        } else {
            console.error(`Errore dal server: ${response.status} (${response.statusText})`);
            const errorText = await response.text();
            console.error("Dettagli errore:", errorText);
        }
    } catch (error) {
        console.error("Errore di rete o fetch fallito:", error);
    }
}

function prepareCurrentExerciseState() {
    if (!currentCoordinationExercise) return;
    
    coordinationQuizScore = 0;
    coordinationQuizStreak = 0;
    updateCoordinationScoreDisplay();

    coordinationQuizBPM = parseInt(coordinationBpmSelect.value, 10) || 80;
    coordinationCurrentRepetition = 0;
    notesInExerciseState = currentCoordinationExercise.notes.map((note, index) => ({
        ...note,
        id: `coordNote-${index}-${coordinationCurrentRepetition}`,
        state: 'pending',
        playedTimestamp: null,
        timingDifference: null,
        isCorrectNote: null,
        startTimeSeconds: (note.time / coordinationQuizBPM) * 60,
        endTimeSeconds: ((note.time + note.duration) / coordinationQuizBPM) * 60,
        svgElement: null
    }));
}

function prepareExerciseForStart() {
    stopCoordinationTiming();
    clearPianoKeyHighlights();
    clearStaffHighlight();
    
    const selectedValue = coordinationExerciseSelect.value;
    if (selectedValue === "random") {
        coordinationQuizStatusDisplay.textContent = "Seleziona un esercizio per iniziare.";
        startExerciseBtn.disabled = true;
        notesInExerciseState = [];
        currentCoordinationExercise = null;
        clearStaff();
        return;
    }

    const exerciseIndex = parseInt(selectedValue, 10);
    currentCoordinationExercise = coordinationExercises[exerciseIndex];
    
    if (!currentCoordinationExercise) {
        console.error("Esercizio selezionato non valido.");
        return;
    }

    prepareCurrentExerciseState(); 
    drawExerciseOnStaff(currentCoordinationExercise); 

    coordinationQuizStatusDisplay.textContent = `Pronto per: "${currentCoordinationExercise.name}". Suona la prima nota per iniziare.`;
    coordinationQuizStatusDisplay.style.color = '#333';
    startExerciseBtn.disabled = false;
    stopCoordinationQuizBtn.disabled = true;
    isExerciseRunning = false;
}

function startCoordinationTiming() {
    if (coordinationQuizIntervalId) clearInterval(coordinationQuizIntervalId);
    if (metronomeIntervalId) clearInterval(metronomeIntervalId);

    coordinationQuizBPM = parseInt(coordinationBpmSelect.value, 10) || 80;
    console.log(`Avvio Timing Quiz Coordinazione a ${coordinationQuizBPM} BPM...`);
    
    coordinationQuizStartTime = performance.now();
    coordinationQuizCurrentBeat = 0;
    isExerciseRunning = true;

    startExerciseBtn.disabled = true;
    stopCoordinationQuizBtn.disabled = false;
    coordinationExerciseSelect.disabled = true;
    coordinationBpmSelect.disabled = true;
    
    coordinationQuizStatusDisplay.textContent = `Esercizio in corso: ${currentCoordinationExercise.name}`;
    coordinationQuizStatusDisplay.style.color = 'blue';

    const beatDurationSeconds = 60.0 / coordinationQuizBPM;
    if (beatDurationSeconds > 0) {
        metronomeIntervalId = setInterval(() => {
            if (!isExerciseRunning) { clearInterval(metronomeIntervalId); return; }
            playMetronomeClick();
        }, beatDurationSeconds * 1000);
        playMetronomeClick();
    }

    const loopIntervalMs = 50;
    coordinationQuizIntervalId = setInterval(coordinationQuizLoop, loopIntervalMs);
}

function restartCurrentCoordinationExercise() {
    if (!currentCoordinationExercise) return;
    stopCoordinationTiming();
    coordinationCurrentRepetition++;
    console.log(`Riavvio esercizio per ripetizione ${coordinationCurrentRepetition + 1}/${coordinationRepetitionTarget}`);
    
    notesInExerciseState.forEach((noteState, index) => {
        noteState.id = `coordNote-${index}-${coordinationCurrentRepetition}`;
        noteState.state = 'pending';
        noteState.playedTimestamp = null;
        noteState.timingDifference = null;
        noteState.isCorrectNote = null;
    });
    
    clearStaffHighlight();
    coordinationQuizStatusDisplay.textContent = `Ripetizione ${coordinationCurrentRepetition + 1}/${coordinationRepetitionTarget}. Via!`;
    coordinationQuizStatusDisplay.style.color = 'blue';
    startCoordinationTiming();
}

function stopCoordinationTiming() {
    if (coordinationQuizIntervalId) clearInterval(coordinationQuizIntervalId);
    if (metronomeIntervalId) clearInterval(metronomeIntervalId);
    coordinationQuizIntervalId = null;
    metronomeIntervalId = null;
}

function playMetronomeClick() {
    if (!audioContext || audioContext.state !== 'running') { initAudioContext(); if (!audioContext || audioContext.state !== 'running') return; }
    try {
        const osc = audioContext.createOscillator(); const gain = audioContext.createGain();
        osc.type = 'sine'; osc.frequency.setValueAtTime(880, audioContext.currentTime);
        gain.gain.setValueAtTime(0.3, audioContext.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
        osc.connect(gain); gain.connect(audioContext.destination);
        osc.start(audioContext.currentTime); osc.stop(audioContext.currentTime + 0.05);
    } catch (e) { console.error("Errore riproduzione metronomo:", e); }
}

function coordinationQuizLoop() {
    const now = performance.now();
    const elapsedSeconds = (now - coordinationQuizStartTime) / 1000.0;
    
    updateCoordinationKeyboardVisuals(elapsedSeconds);
    updateStaffHighlight(elapsedSeconds);

    if (notesInExerciseState.length > 0) {
         const lastNote = notesInExerciseState[notesInExerciseState.length - 1];
         const lastNoteEndTimeSeconds = lastNote.endTimeSeconds;
         const endBufferSeconds = 0.5;

         if (elapsedSeconds > lastNoteEndTimeSeconds + endBufferSeconds) {
             stopCoordinationTiming();
             if (coordinationCurrentRepetition < coordinationRepetitionTarget - 1) {
                 setTimeout(restartCurrentCoordinationExercise, 1500);
             } else {
                 handleExerciseCompletion();
             }
         }
    }
}

function handleExerciseCompletion() {
    console.log(`Esercizio ${currentCoordinationExercise.name} completato.`);
    
    inviaStatisticheAlServer(currentCoordinationExercise.name, coordinationQuizScore, coordinationQuizBPM);

    coordinationQuizStatusDisplay.textContent = `Ottimo! Esercizio "${currentCoordinationExercise.name}" completato.`;
    coordinationQuizStatusDisplay.style.color = 'green';
    
    isExerciseRunning = false;
    currentCoordinationExercise = null;
    notesInExerciseState = [];
    
    coordinationExerciseSelect.disabled = false;
    coordinationBpmSelect.disabled = false;
    coordinationExerciseSelect.value = "random";
    startExerciseBtn.disabled = true;
    stopCoordinationQuizBtn.disabled = true;
    
    setTimeout(() => {
        clearStaff();
        coordinationQuizStatusDisplay.textContent = "Seleziona un esercizio per iniziare.";
        coordinationQuizStatusDisplay.style.color = '#333';
    }, 3000);
}

function updateCoordinationKeyboardVisuals(elapsedSeconds) {
    clearPianoKeyHighlights();
    const lookaheadSeconds = coordinationQuizBPM > 0 ? (upcomingNoteLookahead / coordinationQuizBPM) * 60 : 0.1;

    notesInExerciseState.forEach(noteState => {
        const noteStartTime = noteState.startTimeSeconds;
        const noteEndTime = noteState.endTimeSeconds;
        const isPlayed = noteState.state.startsWith('played');
        
        if (isPlayed) return;

        if (elapsedSeconds >= noteStartTime && elapsedSeconds < noteEndTime) {
            noteState.state = 'due';
            highlightPianoKey(noteState.midi, `coord-now-${noteState.hand}`);
        }
        else if (elapsedSeconds >= noteStartTime - lookaheadSeconds && elapsedSeconds < noteStartTime) {
            noteState.state = 'upcoming';
            highlightPianoKey(noteState.midi, `coord-upcoming-${noteState.hand}`);
        }
        else if (elapsedSeconds >= noteEndTime && noteState.state !== 'missed') {
             noteState.state = 'missed';
             console.log(`Nota ${noteState.midi} mancata.`);
             coordinationQuizStreak = 0;
             updateCoordinationScoreDisplay();
        }
    });
}

 function highlightPianoKey(midi, className, durationMs = null) {
     const keyElement = document.querySelector(`.key[data-midi="${midi}"]`);
     if (keyElement) {
         const classesToRemove = ['coord-upcoming-right', 'coord-upcoming-left', 'coord-now-right', 'coord-now-left', 'coord-correct', 'coord-incorrect-timing', 'coord-incorrect-note'];
         const index = classesToRemove.indexOf(className);
         if (index > -1) { classesToRemove.splice(index, 1); }
         keyElement.classList.remove(...classesToRemove);
         keyElement.classList.add(className);
         if (durationMs) { setTimeout(() => { if (keyElement.classList.contains(className)) { keyElement.classList.remove(className); } }, durationMs); }
     }
 }

 function clearPianoKeyHighlights() {
     pianoKeys.forEach(key => { key.classList.remove('coord-upcoming-right', 'coord-upcoming-left', 'coord-now-right', 'coord-now-left', 'coord-correct', 'coord-incorrect-timing', 'coord-incorrect-note'); });
 }

function handleMidiForCoordinationQuiz(midi, velocity, timestamp) {
    if (!isExerciseRunning && currentCoordinationExercise && notesInExerciseState.length > 0) {
        const primaNotaMidi = notesInExerciseState[0].midi;
        if (midi === primaNotaMidi) {
            console.log("Prima nota corretta rilevata! Avvio dell'esercizio...");
            startCoordinationTiming();
            playNoteSound(midi, velocity);
            
            const targetNoteState = notesInExerciseState[0];
            targetNoteState.state = 'played-correct';
            targetNoteState.playedTimestamp = timestamp;
            targetNoteState.timingDifference = 0;
            targetNoteState.isCorrectNote = true;
            coordinationQuizScore += 10;
            coordinationQuizStreak++;
            updateCoordinationScoreDisplay();
            highlightPianoKey(midi, 'coord-correct', 300);
            return;
        }
    }
    
    if (!isExerciseRunning || !currentCoordinationExercise) return;

    playNoteSound(midi, velocity);
    const elapsedSeconds = (timestamp - coordinationQuizStartTime) / 1000.0;
    let foundExpectedNote = false;

    let targetNoteState = notesInExerciseState.find(noteState => 
        noteState.midi === midi && !noteState.state.startsWith('played')
    );

    if (targetNoteState) {
        const noteStartTime = targetNoteState.startTimeSeconds;
        const timeDiff = elapsedSeconds - noteStartTime;

        if (Math.abs(timeDiff) <= timingToleranceGood) {
            foundExpectedNote = true;
            targetNoteState.playedTimestamp = timestamp;
            targetNoteState.timingDifference = timeDiff;
            targetNoteState.isCorrectNote = true;

            if (Math.abs(timeDiff) <= timingTolerancePerfect) {
                targetNoteState.state = 'played-correct';
                coordinationQuizScore += 10;
                coordinationQuizStreak++;
                highlightPianoKey(targetNoteState.midi, 'coord-correct', 300);
            } else {
                targetNoteState.state = 'played-timing-off';
                coordinationQuizScore += 5;
                coordinationQuizStreak = 0;
                highlightPianoKey(targetNoteState.midi, 'coord-incorrect-timing', 400);
            }
            updateCoordinationScoreDisplay();
        }
    }

    if (!foundExpectedNote) {
         coordinationQuizStreak = 0;
         updateCoordinationScoreDisplay();
         highlightPianoKey(midi, 'coord-incorrect-note', 400);
    }
}

// --- Router MIDI ---
function routeMidiMessage(event) {
    const command = event.data[0] & 0xf0;
    const note = event.data[1];
    const velocity = (event.data.length > 2) ? event.data[2] : 0;
    
    if (command === 0x90 && velocity > 0) {
        handleMidiForCoordinationQuiz(note, velocity, performance.now());
    }
}

// --- Gestori Eventi Pulsanti ---
function handleStartButtonClick() {
    if (currentCoordinationExercise && !isExerciseRunning) {
        console.log("Avvio esercizio tramite pulsante.");
        startCoordinationTiming();
    }
}

function handleStopButtonClick() {
    if (!isExerciseRunning) return;
    console.log("Bottone Stop premuto.");
    stopCoordinationTiming();
    clearPianoKeyHighlights();
    clearStaffHighlight();
    isExerciseRunning = false;
    
    coordinationQuizStatusDisplay.textContent = `Esercizio fermato. Pronto per ripartire.`;
    coordinationQuizStatusDisplay.style.color = 'grey';

    startExerciseBtn.disabled = false;
    stopCoordinationQuizBtn.disabled = true;
    coordinationExerciseSelect.disabled = false;
    coordinationBpmSelect.disabled = false;
    
    prepareCurrentExerciseState();
}

// --- Inizializzazione ---
populateExerciseSelect();
drawStaffSystemHelper(0, 900);

startExerciseBtn.addEventListener('click', handleStartButtonClick);
stopCoordinationQuizBtn.addEventListener('click', handleStopButtonClick);
coordinationExerciseSelect.addEventListener('change', prepareExerciseForStart);
coordinationBpmSelect.addEventListener('change', () => {
    if (currentCoordinationExercise && !isExerciseRunning) {
        prepareExerciseForStart();
    }
});

initializeMIDI();
document.body.addEventListener('click', initAudioContext, { once: true });
document.body.addEventListener('touchstart', initAudioContext, { once: true });
updateCoordinationScoreDisplay();