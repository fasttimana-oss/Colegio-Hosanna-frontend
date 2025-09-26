import { Component } from '@angular/core';
import { Persona, PersonaService } from '../../services/persona.service';
import { OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  personas: Persona[] = [];
  personaSeleccionada: Persona | null = null;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personaService.getPersonas().subscribe({
      next: (data) => this.personas = data,
      error: (err) => console.error('Error cargando personas', err)
    });
  }

  editarPersona(persona: Persona): void {
    // 👉 Clonamos para no modificar directo la tabla
    this.personaSeleccionada = { ...persona };
  }

  guardarCambios(): void {
    if (!this.personaSeleccionada?.id) return;

    this.personaService.updatePersona(this.personaSeleccionada.id, this.personaSeleccionada)
      .subscribe({
        next: () => {
          alert('Usuario actualizado con éxito');
          this.personaSeleccionada = null;
          this.cargarPersonas(); // refresca tabla
        },
        error: (err) => {
          console.error('Error al actualizar', err);
          alert('No se pudo actualizar');
        }
      });
  }

  eliminarPersona(id: number): void {
    this.personaService.deletePersona(id).subscribe({
      next: () => {
        alert('Usuario eliminado');
        this.cargarPersonas();
      },
      error: (err) => console.error('Error al eliminar', err)
    });
  }
}