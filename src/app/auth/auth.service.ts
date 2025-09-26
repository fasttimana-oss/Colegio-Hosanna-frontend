import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // URL de tu NestJS
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // 🔑 detecta si está en navegador
  }

  login(credenciales: { usuario: string; password: string }) {
    return this.http.post<{ token: string; usuario: string; tipo: string }>(
      `${this.apiUrl}/login`,
      credenciales
    ).pipe(
      tap(res => {
        if (this.isBrowser) { // ✅ Solo guardar en navegador
          localStorage.setItem('token', res.token);
          localStorage.setItem('usuario', res.usuario);
          localStorage.setItem('tipo', res.tipo);
        }
      })
    );
  }

  registrar(datos: {
    nombre: string;
    apellido: string;
    tipo: string;
    dni: string;
    usuario: string;
    password: string;
  }) {
    return this.http.post(`${this.apiUrl}/registrar`, datos);
  }

  perfil() {
    return this.http.get(`${this.apiUrl}/perfil`);
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      localStorage.removeItem('tipo');
    }
  }

  isAuthenticated(): boolean {
    return this.isBrowser && !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem('token') : null;
  }

  getTipo(): string | null {
    return this.isBrowser ? localStorage.getItem('tipo') : null;
  }

  getUsuario(): string | null {
    return this.isBrowser ? localStorage.getItem('usuario') : null;
  }
}
