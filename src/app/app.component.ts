import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Persona } from './persona.model';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './persona.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    PersonaComponent,
    FormularioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[];
  
  constructor(
    private loggingService: LoggingService,
    private personaService: PersonasService
  ) {}
  
  ngOnInit(): void {
    this.personas=this.personaService.personas;
  }

}
