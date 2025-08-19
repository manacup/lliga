import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-assistencia-trobada',
  templateUrl: './assistencia-trobada.component.html'
})
export class AssistenciaTrobadaComponent {
  assistent: string = '';
  @Output() confirmaAssistencia = new EventEmitter<string>();

  confirmar() {
    this.confirmaAssistencia.emit(this.assistent);
  }
}
