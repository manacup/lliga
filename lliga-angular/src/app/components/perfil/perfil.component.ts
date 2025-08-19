import { Component, Input } from '@angular/core';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent {
  @Input() jugador?: Jugador;
}
