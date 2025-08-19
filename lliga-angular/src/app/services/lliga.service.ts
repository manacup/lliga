import { Injectable } from '@angular/core';
import { Jugador, Partida } from '../models/jugador.model';
import { Classificacio } from '../models/classificacio.model';

@Injectable({ providedIn: 'root' })
export class LligaService {
  calculaClassificacio(jugadors: Jugador[]): Classificacio[] {
    return jugadors.map(j => {
      const partides = j.partides || [];
      let punts = 0, diferencial = 0, totalPunts = 0, scrabbles = 0, millorJugada = '', puntsMillorJugada = 0;
      let partidesCount = partides.length;
      partides.forEach(p => {
        totalPunts += p.jugador1 === j.nom ? p.puntuacio_1 : p.puntuacio_2;
        diferencial += (p.jugador1 === j.nom ? p.puntuacio_1 - p.puntuacio_2 : p.puntuacio_2 - p.puntuacio_1);
        scrabbles += (p.jugador1 === j.nom ? p.scrabbles_1 : p.scrabbles_2);
        // Punts: 1 victòria, 0.5 empat, 0 derrota
        const me = p.jugador1 === j.nom ? p.puntuacio_1 : p.puntuacio_2;
        const other = p.jugador1 === j.nom ? p.puntuacio_2 : p.puntuacio_1;
        if (me > other) punts += 1;
        else if (me === other) punts += 0.5;
        // Millor jugada
        const mot = p.jugador1 === j.nom ? p.mot_1 : p.mot_2;
        const puntsMot = p.jugador1 === j.nom ? p.puntsmot_1 : p.puntsmot_2;
        if (puntsMot > puntsMillorJugada) {
          puntsMillorJugada = puntsMot;
          millorJugada = mot;
        }
      });
      return {
        jugador: j,
        punts,
        diferencial,
        mitjana: partidesCount ? totalPunts / partidesCount : 0,
        scrabbles,
        millorJugada,
        puntsMillorJugada
      };
    }).sort((a, b) =>
      b.punts - a.punts ||
      b.diferencial - a.diferencial ||
      b.scrabbles - a.scrabbles ||
      b.mitjana - a.mitjana
    );
  }
}
