import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // ✅ Usuario autenticado
    } else {
      this.router.navigate(['/login']); // 🚫 Si no está autenticado lo mandamos al login
      return false;
    }
  }
}
