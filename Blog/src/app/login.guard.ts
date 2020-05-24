import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    const estado = localStorage.getItem('logged');
    if (estado != 'activo') {
      this.router.navigate(['/login']);
    }
    return true;
  }
  
}
