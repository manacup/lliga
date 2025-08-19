import { Component, Input } from '@angular/core';
import { Partida } from '../../models/jugador.model';

@Component({
  selector: 'app-partides',
  templateUrl: './partides.component.html'
})
export class PartidesComponent {
  @Input() partides: Partida[] = [];
}
