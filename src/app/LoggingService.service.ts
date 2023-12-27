import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible globalmente en la aplicación
})
export class LoggingService {
  enviaMensajeAConsola(mensaje: string) {
    console.log(mensaje);
  }
}
