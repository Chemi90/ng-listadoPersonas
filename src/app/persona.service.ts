import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible globalmente en la aplicación
})

export class PersonasService{

    constructor(private loggingService: LoggingService) {}
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'Lara'),
      ];

      saludar = new EventEmitter<number>();

      personaAgregada(persona: Persona) {
        this.loggingService.enviaMensajeAConsola(
          'Agregamos al array una nueva persona: ' +
            persona.nombre +
            ' ' +
            persona.apellido
        );
        this.personas.push(persona);
      }
}