import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const rolRequerido = route.data['roles'] as Array<string>;
    const rolUsuario = localStorage.getItem('tipo'); // 👈 lo que guardamos en login

    if (rolUsuario && rolRequerido.includes(rolUsuario)) {
      return true; // ✅ tiene permiso
    } else {
      this.router.navigate(['/']); // 🚫 acceso denegado
      return false;
    }
  }
}
