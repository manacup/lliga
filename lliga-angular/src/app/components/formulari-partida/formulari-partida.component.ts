import { Component, Output, EventEmitter } from '@angular/core';
import { Partida } from '../../models/jugador.model';

@Component({
  selector: 'app-formulari-partida',
  templateUrl: './formulari-partida.component.html'
})
export class FormulariPartidaComponent {
  partida: Partial<Partida> = {};
  @Output() submitPartida = new EventEmitter<Partida>();

  enviar() {
    this.submitPartida.emit(this.partida as Partida);
  }
}
