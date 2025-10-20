import { Component } from '@angular/core';
import { Evento, EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-event-list',
  standalone: false,
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
    
  eventos: Evento[]= [];
  mensaje ='';


constructor(private eventoservice:EventosService){

} 

ngOnInit():void{
  this.cargarEventos();


}

cargarEventos(){
  this.eventoservice.liseventos().subscribe({
    next:(data)=>this.eventos=data,
    error:(err)=>console.error(err)
  })
}

 publicarEvento(evento: Evento) {
    const nuevoEstado = !evento.publicado;
    this.eventoservice.updateEvento(evento.id!, { publicado: nuevoEstado }).subscribe({
      next: () => {
        evento.publicado = nuevoEstado;
        this.mensaje = nuevoEstado
          ? '✅ Evento publicado exitosamente'
          : '🚫 Evento despublicado';
      },
      error: () => this.mensaje = '❌ Error al actualizar el estado del evento'
    });
  }
}