import { Component, Input } from '@angular/core';
import { Classificacio } from '../../models/classificacio.model';

@Component({
  selector: 'app-classificacio',
  templateUrl: './classificacio.component.html'
})
export class ClassificacioComponent {
  @Input() classificacio: Classificacio[] = [];
}
