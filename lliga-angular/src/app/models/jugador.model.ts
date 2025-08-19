export interface Jugador {
  id: string;
  nom: string;
  malnom2?: string;
  imatge?: string;
  campionats?: string;
  podis?: string;
  diplomes?: string;
  posConjuntaArray?: number[];
  telefon?: string;
  etiqueta?: string;
  BRF?: string;
  PosBRF?: string;
  CatBRF?: string;
  VD?: string;
  ATP?: string;
  Descripcio?: string;
  Posicio?: number;
  Baixa?: boolean;
  partides?: Partida[];
}

export interface Partida {
  id: string;
  ronda: number;
  jugador1: string;
  jugador2: string;
  puntuacio_1: number;
  puntuacio_2: number;
  scrabbles_1: number;
  scrabbles_2: number;
  mot_1: string;
  mot_2: string;
  puntsmot_1: number;
  puntsmot_2: number;
  full?: string;
  tauler?: string;
  punts_social?: number;
  estat?: string;
}
