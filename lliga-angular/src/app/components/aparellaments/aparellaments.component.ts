import { Component, Input } from '@angular/core';
import { Aparellament } from '../../models/aparellament.model';

@Component({
  selector: 'app-aparellaments',
  templateUrl: './aparellaments.component.html'
})
export class AparellamentsComponent {
  @Input() aparellaments: Aparellament[] = [];
}
