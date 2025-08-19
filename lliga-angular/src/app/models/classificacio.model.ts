import { Jugador } from './jugador.model';

export interface Classificacio {
  jugador: Jugador;
  punts: number;
  diferencial: number;
  mitjana: number;
  scrabbles: number;
  millorJugada: string;
  puntsMillorJugada: number;
}
