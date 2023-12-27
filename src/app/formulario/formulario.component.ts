import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../LoggingService.service'; // Asegúrate de que la ruta sea correcta
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  constructor(private loggingService: LoggingService,
    private personaService: PersonasService) {
      this.personaService.saludar.subscribe(
        (indice:number) => alert("El indice es: "+indice)
        );
    }

  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput,
      this.apellidoInput
    );
    this.loggingService.enviaMensajeAConsola('Enviamos persona: ' + persona1.nombre + ' ' + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personaService.personaAgregada(persona1);
    this.nombreInput = '';
    this.apellidoInput = '';
  }
}
