import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador.model';
import { Aparellament } from '../models/aparellament.model';
import { Partida } from '../models/jugador.model';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getJugadors(): Observable<Jugador[]> {
    const ref = collection(this.firestore, 'jugadors');
    return collectionData(ref, { idField: 'id' }) as Observable<Jugador[]>;
  }

  getAparellaments(): Observable<Aparellament[]> {
    const ref = collection(this.firestore, 'aparellaments');
    return collectionData(ref, { idField: 'id' }) as Observable<Aparellament[]>;
  }

  getPartides(): Observable<Partida[]> {
    const ref = collection(this.firestore, 'partides');
    return collectionData(ref, { idField: 'id' }) as Observable<Partida[]>;
  }

  addJugador(jugador: Jugador) {
    const ref = collection(this.firestore, 'jugadors');
    return addDoc(ref, jugador);
  }
  addAparellament(aparellament: Aparellament) {
    const ref = collection(this.firestore, 'aparellaments');
    return addDoc(ref, aparellament);
  }
  addPartida(partida: Partida) {
    const ref = collection(this.firestore, 'partides');
    return addDoc(ref, partida);
  }
  addAssistencia(assistencia: { nom: string }) {
    const ref = collection(this.firestore, 'assistents');
    return addDoc(ref, assistencia);
  }
}
