import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeticionesService } from '../peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  isLogged: boolean = false;

  constructor(
    private peticionesService: PeticionesService,
    private router: Router
    ) {

    this.formulario = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/)
      ])
    });

   }

  ngOnInit(): void {
  }

  async recogerDatos() {
    const datos = this.formulario.value;
    let usuarios = await this.peticionesService.usersLoged()
    usuarios = usuarios['data'];
    usuarios.forEach((usuario) => {
      if (datos.username == usuario.name && datos.password == '12345q') {
        const isLogged = 'activo'
        localStorage.setItem('logged', isLogged);
        this.router.navigate(['/posts']);
      };
    });  
  }

}
