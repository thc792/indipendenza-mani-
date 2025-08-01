
    const coordinationExercises = [
        // --- Esercizi Originali ---
        { name: "1A: LH Statica, RH Mobile", notes: [ { midi: 48, time: 0.0, duration: 4.0, hand: 'left' }, { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 62, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 64, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 65, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 43, time: 4.0, duration: 4.0, hand: 'left' }, { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 65, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 64, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 62, time: 7.0, duration: 1.0, hand: 'right' }, ] },
        { name: "1B: RH Statica, LH Mobile", notes: [ { midi: 67, time: 0.0, duration: 4.0, hand: 'right' }, { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 50, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 52, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 53, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 72, time: 4.0, duration: 4.0, hand: 'right' }, { midi: 55, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 53, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 52, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 50, time: 7.0, duration: 1.0, hand: 'left' }, ] },
        { name: "2: Moto Contrario (5+3)", notes: [ { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 60, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 59, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 57, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 57, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 7.0, duration: 1.0, hand: 'right' }, { midi: 59, time: 7.0, duration: 1.0, hand: 'left' }, ] },
        { name: "3A: Ritmo 2:1", notes: [ { midi: 48, time: 0.0, duration: 2.0, hand: 'left' }, { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 62, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 2.0, duration: 2.0, hand: 'left' }, { midi: 64, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 65, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 48, time: 4.0, duration: 2.0, hand: 'left' }, { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 65, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 6.0, duration: 2.0, hand: 'left' }, { midi: 64, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 62, time: 7.0, duration: 1.0, hand: 'right' }, ] },
        { name: "3B: Ritmo Puntato", notes: [ { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 0.0, duration: 1.5, hand: 'right' }, { midi: 52, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 1.5, duration: 0.5, hand: 'right' }, { midi: 55, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 2.0, duration: 1.5, hand: 'right' }, { midi: 52, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 3.5, duration: 0.5, hand: 'right' }, { midi: 48, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 4.0, duration: 1.5, hand: 'right' }, { midi: 52, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 5.5, duration: 0.5, hand: 'right' }, { midi: 55, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 6.0, duration: 1.5, hand: 'right' }, { midi: 52, time: 7.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 7.5, duration: 0.5, hand: 'right' }, ] },
        { name: "4: Ostinato LH", notes: [ { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 0.0, duration: 2.0, hand: 'right' }, { midi: 55, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 52, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 2.0, duration: 2.0, hand: 'right' }, { midi: 55, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 48, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 4.0, duration: 2.0, hand: 'right' }, { midi: 55, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 52, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 6.0, duration: 2.0, hand: 'right' }, { midi: 55, time: 7.0, duration: 1.0, hand: 'left' }, { midi: 48, time: 8.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 8.0, duration: 4.0, hand: 'right' }, { midi: 55, time: 9.0, duration: 1.0, hand: 'left' }, { midi: 52, time: 10.0, duration: 1.0, hand: 'left' }, { midi: 55, time: 11.0, duration: 1.0, hand: 'left' }, ] },
        { name: "5: Arpeggio Do Magg. (Diviso)", notes: [ { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 72, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 48, time: 7.0, duration: 1.0, hand: 'left' }, ] },
        { name: "6: Accordo Spezzato Sol Magg.", notes: [ { midi: 43, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 59, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 74, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 59, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 71, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 43, time: 7.0, duration: 1.0, hand: 'left' }, ] },
        { name: "7: Scala Parallela (Do-Mi)", notes: [ { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 48, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 7.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 7.0, duration: 1.0, hand: 'right' }, ] },
        { name: "8: Scala Contraria (Do-Sol)", notes: [ { midi: 60, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 59, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 57, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 57, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 59, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 60, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 60, time: 7.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 7.0, duration: 1.0, hand: 'right' }, ] },
        { name: "9: Incrocio Semplice (LH over RH)", notes: [ { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 64, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 57, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 7.0, duration: 1.0, hand: 'right' }, ] },
        { name: "10: Incrocio Semplice (RH over LH)", notes: [ { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 52, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 7.0, duration: 1.0, hand: 'left' }, ] },
        { name: "11: Frammenti Arpeggio Alternati (Do Magg)", notes: [ { midi: 48, time: 0.0, duration: 0.5, hand: 'left' }, { midi: 52, time: 0.5, duration: 0.5, hand: 'left' }, { midi: 67, time: 1.0, duration: 0.5, hand: 'right' }, { midi: 72, time: 1.5, duration: 0.5, hand: 'right' }, { midi: 55, time: 2.0, duration: 0.5, hand: 'left' }, { midi: 60, time: 2.5, duration: 0.5, hand: 'left' }, { midi: 72, time: 3.0, duration: 0.5, hand: 'right' }, { midi: 76, time: 3.5, duration: 0.5, hand: 'right' }, { midi: 60, time: 4.0, duration: 0.5, hand: 'left' }, { midi: 55, time: 4.5, duration: 0.5, hand: 'left' }, { midi: 72, time: 5.0, duration: 0.5, hand: 'right' }, { midi: 67, time: 5.5, duration: 0.5, hand: 'right' }, { midi: 52, time: 6.0, duration: 0.5, hand: 'left' }, { midi: 48, time: 6.5, duration: 0.5, hand: 'left' }, { midi: 67, time: 7.0, duration: 0.5, hand: 'right' }, { midi: 64, time: 7.5, duration: 0.5, hand: 'right' }, ] },
        { name: "12: Accordo LH + Arpeggio RH", notes: [ { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 48, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 43, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 71, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 43, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 74, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 7.0, duration: 1.0, hand: 'left' }, { midi: 71, time: 7.0, duration: 1.0, hand: 'right' }, ] },
        { name: "13: Basso Albertino LH + Melodia RH", notes: [ { midi: 48, time: 0.0, duration: 0.5, hand: 'left' }, { midi: 64, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 0.5, duration: 0.5, hand: 'left' }, { midi: 52, time: 1.0, duration: 0.5, hand: 'left' }, { midi: 65, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 1.5, duration: 0.5, hand: 'left' }, { midi: 48, time: 2.0, duration: 0.5, hand: 'left' }, { midi: 67, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 2.5, duration: 0.5, hand: 'left' }, { midi: 52, time: 3.0, duration: 0.5, hand: 'left' }, { midi: 64, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 3.5, duration: 0.5, hand: 'left' }, { midi: 43, time: 4.0, duration: 0.5, hand: 'left' }, { midi: 74, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 4.5, duration: 0.5, hand: 'left' }, { midi: 47, time: 5.0, duration: 0.5, hand: 'left' }, { midi: 72, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 5.5, duration: 0.5, hand: 'left' }, { midi: 43, time: 6.0, duration: 0.5, hand: 'left' }, { midi: 71, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 6.5, duration: 0.5, hand: 'left' }, { midi: 47, time: 7.0, duration: 0.5, hand: 'left' }, { midi: 69, time: 7.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 7.5, duration: 0.5, hand: 'left' }, ] },
        { name: "14: Sincope Semplice RH vs LH", notes: [ { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 0.0, duration: 0.5, hand: 'right' }, { midi: 65, time: 0.5, duration: 1.0, hand: 'right' }, { midi: 55, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 1.5, duration: 0.5, hand: 'right' }, { midi: 48, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 69, time: 2.0, duration: 0.5, hand: 'right' }, { midi: 67, time: 2.5, duration: 1.0, hand: 'right' }, { midi: 55, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 3.5, duration: 0.5, hand: 'right' }, { midi: 41, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 48, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 5.0, duration: 0.5, hand: 'right' }, { midi: 60, time: 5.5, duration: 1.0, hand: 'right' }, { midi: 41, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 62, time: 6.5, duration: 0.5, hand: 'right' }, { midi: 48, time: 7.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 7.0, duration: 1.0, hand: 'right' }, ] },
        { name: "15: Arpeggio Prog. (C-F-G-C)", notes: [ { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 72, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 72, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 60, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 77, time: 7.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 8.0, duration: 1.0, hand: 'left' }, { midi: 74, time: 9.0, duration: 1.0, hand: 'right' }, { midi: 62, time: 10.0, duration: 1.0, hand: 'left' }, { midi: 79, time: 11.0, duration: 1.0, hand: 'right' }, { midi: 60, time: 12.0, duration: 1.0, hand: 'left' }, { midi: 76, time: 13.0, duration: 1.0, hand: 'right' }, { midi: 67, time: 14.0, duration: 1.0, hand: 'left' }, { midi: 72, time: 15.0, duration: 1.0, hand: 'right' }, ]},
        { name: "16: Broken Chords (C-Am-F-G)", notes: [ { midi: 48, time: 0.0, duration: 0.5, hand: 'left' }, { midi: 60, time: 0.0, duration: 2.0, hand: 'right' }, { midi: 55, time: 0.5, duration: 0.5, hand: 'left' }, { midi: 60, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 45, time: 2.0, duration: 0.5, hand: 'left' }, { midi: 69, time: 2.0, duration: 2.0, hand: 'right' }, { midi: 52, time: 2.5, duration: 0.5, hand: 'left' }, { midi: 57, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 41, time: 4.0, duration: 0.5, hand: 'left' }, { midi: 65, time: 4.0, duration: 2.0, hand: 'right' }, { midi: 48, time: 4.5, duration: 0.5, hand: 'left' }, { midi: 53, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 43, time: 6.0, duration: 0.5, hand: 'left' }, { midi: 67, time: 6.0, duration: 2.0, hand: 'right' }, { midi: 50, time: 6.5, duration: 0.5, hand: 'left' }, { midi: 55, time: 7.0, duration: 1.0, hand: 'left' }, ]},
        { name: "17: Scale Alternation (C Maj)", notes: [ { midi: 60, time: 0.0, duration: 0.5, hand: 'right' }, { midi: 62, time: 0.5, duration: 0.5, hand: 'right' }, { midi: 53, time: 1.0, duration: 0.5, hand: 'left' }, { midi: 55, time: 1.5, duration: 0.5, hand: 'left' }, { midi: 64, time: 2.0, duration: 0.5, hand: 'right' }, { midi: 65, time: 2.5, duration: 0.5, hand: 'right' }, { midi: 57, time: 3.0, duration: 0.5, hand: 'left' }, { midi: 59, time: 3.5, duration: 0.5, hand: 'left' }, { midi: 67, time: 4.0, duration: 0.5, hand: 'right' }, { midi: 69, time: 4.5, duration: 0.5, hand: 'right' }, { midi: 60, time: 5.0, duration: 0.5, hand: 'left' }, { midi: 62, time: 5.5, duration: 0.5, hand: 'left' }, { midi: 71, time: 6.0, duration: 0.5, hand: 'right' }, { midi: 72, time: 6.5, duration: 0.5, hand: 'right' }, { midi: 64, time: 7.0, duration: 0.5, hand: 'left' }, { midi: 65, time: 7.5, duration: 0.5, hand: 'left' }, ]},
        { name: "18: Contrary Arpeggios (C Maj)", notes: [ { midi: 60, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 48, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 72, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 64, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 60, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 60, time: 7.0, duration: 1.0, hand: 'left' }, { midi: 60, time: 7.0, duration: 1.0, hand: 'right' }, ]},
        { name: "19: Polyrhythm Prep (3 vs 2)", notes: [ { midi: 48, time: 0.0, duration: 2.0, hand: 'left' }, { midi: 60, time: 0.0, duration: 0.66, hand: 'right' }, { midi: 62, time: 0.66, duration: 0.67, hand: 'right'}, { midi: 64, time: 1.33, duration: 0.67, hand: 'right'}, { midi: 55, time: 2.0, duration: 2.0, hand: 'left' }, { midi: 65, time: 2.0, duration: 0.66, hand: 'right' }, { midi: 64, time: 2.66, duration: 0.67, hand: 'right'}, { midi: 62, time: 3.33, duration: 0.67, hand: 'right'}, { midi: 48, time: 4.0, duration: 2.0, hand: 'left' }, { midi: 60, time: 4.0, duration: 0.66, hand: 'right' }, { midi: 62, time: 4.66, duration: 0.67, hand: 'right'}, { midi: 64, time: 5.33, duration: 0.67, hand: 'right'}, { midi: 55, time: 6.0, duration: 2.0, hand: 'left' }, { midi: 65, time: 6.0, duration: 0.66, hand: 'right' }, { midi: 64, time: 6.66, duration: 0.67, hand: 'right'}, { midi: 62, time: 7.33, duration: 0.67, hand: 'right'}, ]},
       
     { name: "20: Chromatic Alternation", notes: [ { midi: 60, time: 0.0, duration: 0.5, hand: 'right' }, { midi: 61, time: 0.5, duration: 0.5, hand: 'right' }, { midi: 51, time: 1.0, duration: 0.5, hand: 'left' }, { midi: 52, time: 1.5, duration: 0.5, hand: 'left' }, { midi: 62, time: 2.0, duration: 0.5, hand: 'right' }, { midi: 63, time: 2.5, duration: 0.5, hand: 'right' }, { midi: 53, time: 3.0, duration: 0.5, hand: 'left' }, { midi: 54, time: 3.5, duration: 0.5, hand: 'left' }, { midi: 64, time: 4.0, duration: 0.5, hand: 'right' }, { midi: 63, time: 4.5, duration: 0.5, hand: 'right' }, { midi: 55, time: 5.0, duration: 0.5, hand: 'left' }, { midi: 54, time: 5.5, duration: 0.5, hand: 'left' }, { midi: 62, time: 6.0, duration: 0.5, hand: 'right' }, { midi: 61, time: 6.5, duration: 0.5, hand: 'right' }, { midi: 52, time: 7.0, duration: 0.5, hand: 'left' }, { midi: 51, time: 7.5, duration: 0.5, hand: 'left' }, ]},
    // =======================================================
        // === INIZIO 10 NUOVI ESERCIZI AGGIUNTI =================
        // =======================================================
        { 
            name: "21: Sincope in Mano Sinistra", 
            notes: [ 
                { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 0.5, duration: 1.0, hand: 'left' },
                { midi: 64, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 1.5, duration: 1.0, hand: 'left' },
                { midi: 67, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 2.5, duration: 1.0, hand: 'left' },
                { midi: 64, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 3.5, duration: 1.0, hand: 'left' },
                { midi: 60, time: 4.0, duration: 2.0, hand: 'right' }, { midi: 48, time: 4.0, duration: 2.0, hand: 'left' }
            ] 
        },
        { 
            name: "22: Scala Contraria La Minore Naturale", 
            notes: [ 
                { midi: 69, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 57, time: 0.0, duration: 1.0, hand: 'left' },
                { midi: 71, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 55, time: 1.0, duration: 1.0, hand: 'left' },
                { midi: 72, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 2.0, duration: 1.0, hand: 'left' },
                { midi: 74, time: 3.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 3.0, duration: 1.0, hand: 'left' },
                { midi: 76, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 4.0, duration: 1.0, hand: 'left' },
                { midi: 74, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 5.0, duration: 1.0, hand: 'left' },
                { midi: 72, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 6.0, duration: 1.0, hand: 'left' },
                { midi: 69, time: 7.0, duration: 1.0, hand: 'right' }, { midi: 57, time: 7.0, duration: 1.0, hand: 'left' }
            ] 
        },
        { 
            name: "23: Accompagnamento Stile Valzer (C-G)", 
            notes: [ 
                { midi: 48, time: 0.0, duration: 1.0, hand: 'left' }, 
                { midi: 64, time: 1.0, duration: 1.0, hand: 'right' }, { midi: 67, time: 1.0, duration: 1.0, hand: 'right' }, 
                { midi: 64, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 67, time: 2.0, duration: 1.0, hand: 'right' }, 
                { midi: 43, time: 3.0, duration: 1.0, hand: 'left' }, 
                { midi: 62, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, 
                { midi: 62, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 67, time: 5.0, duration: 1.0, hand: 'right' }, 
                { midi: 48, time: 6.0, duration: 2.0, hand: 'left' }, { midi: 60, time: 6.0, duration: 2.0, hand: 'right' }
            ] 
        },
        { 
            name: "24: Chiamata e Risposta", 
            notes: [ 
                { midi: 60, time: 0.0, duration: 0.5, hand: 'right' }, { midi: 62, time: 0.5, duration: 0.5, hand: 'right' }, { midi: 64, time: 1.0, duration: 1.0, hand: 'right' },
                { midi: 48, time: 2.0, duration: 0.5, hand: 'left' }, { midi: 50, time: 2.5, duration: 0.5, hand: 'left' }, { midi: 52, time: 3.0, duration: 1.0, hand: 'left' },
                { midi: 65, time: 4.0, duration: 0.5, hand: 'right' }, { midi: 64, time: 4.5, duration: 0.5, hand: 'right' }, { midi: 62, time: 5.0, duration: 1.0, hand: 'right' },
                { midi: 53, time: 6.0, duration: 0.5, hand: 'left' }, { midi: 52, time: 6.5, duration: 0.5, hand: 'left' }, { midi: 50, time: 7.0, duration: 1.0, hand: 'left' }
            ] 
        },
        { 
            name: "25: Arpeggi in Terzine (C Magg)", 
            notes: [ 
                { midi: 48, time: 0.0, duration: 2.0, hand: 'left' },
                { midi: 60, time: 0.0, duration: 0.33, hand: 'right' }, { midi: 64, time: 0.33, duration: 0.33, hand: 'right' }, { midi: 67, time: 0.66, duration: 0.34, hand: 'right' },
                { midi: 60, time: 1.0, duration: 0.33, hand: 'right' }, { midi: 64, time: 1.33, duration: 0.33, hand: 'right' }, { midi: 67, time: 1.66, duration: 0.34, hand: 'right' },
                { midi: 55, time: 2.0, duration: 2.0, hand: 'left' },
                { midi: 62, time: 2.0, duration: 0.33, hand: 'right' }, { midi: 65, time: 2.33, duration: 0.33, hand: 'right' }, { midi: 69, time: 2.66, duration: 0.34, hand: 'right' },
                { midi: 62, time: 3.0, duration: 0.33, hand: 'right' }, { midi: 65, time: 3.33, duration: 0.33, hand: 'right' }, { midi: 69, time: 3.66, duration: 0.34, hand: 'right' },
            ] 
        },
        { 
            name: "26: Scala Fa Maggiore (con Si bemolle)", 
            notes: [ 
                { midi: 53, time: 0.0, duration: 1.0, hand: 'left' }, { midi: 65, time: 0.0, duration: 1.0, hand: 'right' },
                { midi: 55, time: 1.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 1.0, duration: 1.0, hand: 'right' },
                { midi: 57, time: 2.0, duration: 1.0, hand: 'left' }, { midi: 69, time: 2.0, duration: 1.0, hand: 'right' },
                { midi: 58, time: 3.0, duration: 1.0, hand: 'left' }, { midi: 70, time: 3.0, duration: 1.0, hand: 'right' }, // Si bemolle (Bb)
                { midi: 60, time: 4.0, duration: 1.0, hand: 'left' }, { midi: 72, time: 4.0, duration: 1.0, hand: 'right' },
                { midi: 58, time: 5.0, duration: 1.0, hand: 'left' }, { midi: 70, time: 5.0, duration: 1.0, hand: 'right' }, // Si bemolle (Bb)
                { midi: 57, time: 6.0, duration: 1.0, hand: 'left' }, { midi: 69, time: 6.0, duration: 1.0, hand: 'right' },
                { midi: 55, time: 7.0, duration: 1.0, hand: 'left' }, { midi: 67, time: 7.0, duration: 1.0, hand: 'right' },
            ] 
        },
        { 
            name: "27: Progressione ii-V-I (in Do Magg)", 
            notes: [ 
                { midi: 50, time: 0.0, duration: 2.0, hand: 'left' }, // Dm
                { midi: 65, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 69, time: 1.0, duration: 1.0, hand: 'right' },
                { midi: 55, time: 2.0, duration: 2.0, hand: 'left' }, // G
                { midi: 67, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 71, time: 3.0, duration: 1.0, hand: 'right' },
                { midi: 48, time: 4.0, duration: 4.0, hand: 'left' }, // C
                { midi: 67, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 64, time: 5.0, duration: 1.0, hand: 'right' }, { midi: 60, time: 6.0, duration: 2.0, hand: 'right' },
            ] 
        },
        { 
            name: "28: Preparazione al Trillo", 
            notes: [ 
                { midi: 48, time: 0.0, duration: 4.0, hand: 'left' }, { midi: 55, time: 0.0, duration: 4.0, hand: 'left' },
                { midi: 67, time: 0.0, duration: 0.25, hand: 'right' }, { midi: 69, time: 0.25, duration: 0.25, hand: 'right' }, 
                { midi: 67, time: 0.5, duration: 0.25, hand: 'right' }, { midi: 69, time: 0.75, duration: 0.25, hand: 'right' },
                { midi: 67, time: 1.0, duration: 0.25, hand: 'right' }, { midi: 69, time: 1.25, duration: 0.25, hand: 'right' }, 
                { midi: 67, time: 1.5, duration: 0.25, hand: 'right' }, { midi: 69, time: 1.75, duration: 0.25, hand: 'right' },
                { midi: 65, time: 2.0, duration: 0.5, hand: 'right' }, { midi: 64, time: 2.5, duration: 0.5, hand: 'right' }, { midi: 62, time: 3.0, duration: 1.0, hand: 'right' },
            ] 
        },
        { 
            name: "29: Salto di Ottava Alternato", 
            notes: [ 
                { midi: 60, time: 0.0, duration: 1.0, hand: 'right' }, { midi: 48, time: 1.0, duration: 1.0, hand: 'left' },
                { midi: 62, time: 2.0, duration: 1.0, hand: 'right' }, { midi: 50, time: 3.0, duration: 1.0, hand: 'left' },
                { midi: 64, time: 4.0, duration: 1.0, hand: 'right' }, { midi: 52, time: 5.0, duration: 1.0, hand: 'left' },
                { midi: 65, time: 6.0, duration: 1.0, hand: 'right' }, { midi: 53, time: 7.0, duration: 1.0, hand: 'left' },
            ] 
        },
        { 
            name: "30: Acciaccature Ritmiche", 
            notes: [ 
                { midi: 48, time: 0.0, duration: 2.0, hand: 'left' }, 
                { midi: 65, time: 0.0, duration: 0.25, hand: 'right' }, { midi: 64, time: 0.25, duration: 1.75, hand: 'right' },
                { midi: 43, time: 2.0, duration: 2.0, hand: 'left' }, 
                { midi: 69, time: 2.0, duration: 0.25, hand: 'right' }, { midi: 67, time: 2.25, duration: 1.75, hand: 'right' },
                { midi: 41, time: 4.0, duration: 2.0, hand: 'left' }, 
                { midi: 67, time: 4.0, duration: 0.25, hand: 'right' }, { midi: 65, time: 4.25, duration: 1.75, hand: 'right' },
                { midi: 48, time: 6.0, duration: 2.0, hand: 'left' }, { midi: 60, time: 6.0, duration: 2.0, hand: 'right' },
            ] 
        },

    ];
    