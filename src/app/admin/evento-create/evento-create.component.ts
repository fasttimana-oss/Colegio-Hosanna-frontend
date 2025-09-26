import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../services/eventos.service';
@Component({
  selector: 'app-evento-create',
  standalone: false,
  templateUrl: './evento-create.component.html',
  styleUrl: './evento-create.component.css'
})
export class EventoCreateComponent {
  eventoForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private eventosService: EventosService) {
    this.eventoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      fecha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.eventoForm.valid) {
      const nuevoEvento: Evento = this.eventoForm.value;
      this.eventosService.createEvento(nuevoEvento).subscribe({
        next: (res) => {
          this.mensaje = '✅ Evento creado con éxito';
          this.eventoForm.reset();
        },
        error: (err) => {
          console.error(err);
          this.mensaje = '❌ Error al registrar el evento';
        }
      });
    } else {
      this.mensaje = 'Por favor, completa todos los campos';
    }
  }

}
