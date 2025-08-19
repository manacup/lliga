import { Component, Input } from '@angular/core';
import { Trobada } from '../../models/trobada.model';

@Component({
  selector: 'app-trobades',
  templateUrl: './trobades.component.html'
})
export class TrobadesComponent {
  @Input() trobades: Trobada[] = [];
}
