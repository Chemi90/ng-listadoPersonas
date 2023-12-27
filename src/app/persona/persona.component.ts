import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  @Input() persona: Persona;
  @Input() indice: number;

constructor(private personaService:PersonasService){}

  emitirSaludo(){
  this.personaService.saludar.emit(this.indice);
  }
}
