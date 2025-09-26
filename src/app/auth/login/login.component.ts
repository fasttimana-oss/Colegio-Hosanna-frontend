import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({ usuario: this.usuario, password: this.password }).subscribe({
      next: (res) => {
        console.log('Login exitoso ✅', res);
           if (res.tipo === 'admin') {
          this.router.navigate(['/admin']);
        } else if (res.tipo === 'alumno') {
          this.router.navigate(['/alumno']);
        } else if (res.tipo === 'docente') {
          this.router.navigate(['/docente']);
        } else {
          this.router.navigate(['/']); // fallback
        }
      },
      error: (err) => {
        console.error(err);
        this.error = err.error.message || 'Error al iniciar sesión';
      }
    });
  }
}
