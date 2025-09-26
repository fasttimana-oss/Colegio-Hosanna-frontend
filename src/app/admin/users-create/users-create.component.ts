import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-users-create',
  standalone: false,
  templateUrl: './users-create.component.html',
  styleUrl: './users-create.component.css'
})
export class UsersCreateComponent {

  usuario = {
    nombre: '',
    apellido: '',
    tipo: 'alumno', // valor por defecto
    dni: '',
    usuario: '',
    password: ''
  };

  constructor(private authService: AuthService) { } 

  crearUsuario() {
    this.authService.registrar(this.usuario).subscribe({
      next: (res) => {
        console.log("usuario creado", res);
        alert("usuario registrado con éxito");

        // 👉 Limpia los campos después de registrar
        this.usuario = {
          nombre: '',
          apellido: '',
          tipo: 'alumno',
          dni: '',
          usuario: '',
          password: ''
        };
      },
      error: (err) => {
        console.error('Error al crear usuario', err);
        alert("error al registrar usuario");
      }
    });
  }
}
