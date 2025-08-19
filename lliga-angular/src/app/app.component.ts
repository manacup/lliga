import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './services/firestore.service';
import { LligaService } from './services/lliga.service';
import { Jugador, Partida } from './models/jugador.model';
import { Aparellament } from './models/aparellament.model';
import { Classificacio } from './models/classificacio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  jugadors: Jugador[] = [];
  aparellaments: Aparellament[] = [];
  partides: Partida[] = [];
  classificacio: Classificacio[] = [];
  jugadorDesat?: Jugador;

  constructor(private firestore: FirestoreService, private lliga: LligaService) {}

  ngOnInit() {
    this.firestore.getJugadors().subscribe(jugadors => {
      this.jugadors = jugadors;
      this.classificacio = this.lliga.calculaClassificacio(jugadors);
      this.jugadorDesat = jugadors[0];
    });
    this.firestore.getAparellaments().subscribe(aparellaments => {
      this.aparellaments = aparellaments;
    });
    this.firestore.getPartides().subscribe(partides => {
      this.partides = partides;
    });
  }

  desarPartida(partida: Partida) {
    this.firestore.addPartida(partida).then(() => {
      // Opcional: missatge de confirmació
    });
  }

  desarAssistencia(nom: string) {
    // Exemple: pots guardar l'assistència com un document a la col·lecció 'assistents'
    this.firestore.addAssistencia({ nom });
  }
}
