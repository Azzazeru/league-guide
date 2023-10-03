import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Verificar si el usuario y la contraseña son "admin"
    if (this.username === 'admin' && this.password === 'admin') {
      // Redirigir a la pantalla específica después del inicio de sesión exitoso
      this.router.navigate(['/admin']);
    } else {
      // En caso de credenciales incorrectas, puedes mostrar un mensaje de error o realizar otras acciones.
      alert('Credenciales incorrectas');
    }
  }


  ngOnInit() {
  }

}