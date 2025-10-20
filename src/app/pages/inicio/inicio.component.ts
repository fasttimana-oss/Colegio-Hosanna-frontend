import { Component } from '@angular/core';
import { Evento, EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

 eventosPublicados: Evento[] = [];

  constructor(private eventosService: EventosService) {}

  ngOnInit() {
    this.cargarEventosPublicados();
  }

  cargarEventosPublicados() {
    this.eventosService.liseventos().subscribe({
      next: (data: Evento[]
      ) => {
        // Solo mostramos los eventos que estén marcados como publicados
        this.eventosPublicados = data.filter(evento => evento.publicado === true);
      },
      error: (err) => {
        console.error('Error al obtener los eventos', err);
      }
    });
  }


}
