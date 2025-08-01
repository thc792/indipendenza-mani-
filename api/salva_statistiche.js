import { sql } from '@neondatabase/serverless';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Solo il metodo POST è accettato' });
  }

  try {
    const { id_alunno, nome_esercizio, punteggio, bpm } = request.body;

    if (!id_alunno || !nome_esercizio || punteggio === undefined || !bpm) {
      return response.status(400).json({ message: 'Dati mancanti nel corpo della richiesta.' });
    }

    await sql`
      INSERT INTO statistiche (id_alunno, nome_esercizio, punteggio, bpm) 
      VALUES (${id_alunno}, ${nome_esercizio}, ${punteggio}, ${bpm});
    `;
    
    return response.status(200).json({ message: 'Progressi salvati con successo!' });

  } catch (error) {
    console.error('Errore durante il salvaggio nel database:', error);
    return response.status(500).json({ message: 'Errore interno del server', error: error.message });
  }
}