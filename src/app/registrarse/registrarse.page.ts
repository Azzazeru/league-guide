import { Component } from '@angular/core';
import { AuthService } from './servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './registrarse.page.html',
  // styleUrls: ['./register.component.css']
})
export class RegistrarsePage {
  user: any = {
    username: '',
    password: '',
    server: ''
    // Otros campos del formulario si es necesario
  };
  selectedServer: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {
    // Verifica si el nombre de usuario ya está ocupado antes de intentar el registro
    this.authService.checkUsernameExists(this.user.username).subscribe(
      (usernameExists) => {
        if (usernameExists) {
          console.error('El nombre de usuario ya está ocupado.');
        } else {
          // Agrega el servidor seleccionado a los datos del usuario
          this.user.server = this.selectedServer;

          // Llama al servicio para registrar al usuario
          this.authService.register(this.user).subscribe(
            (response) => {
              // Registro exitoso, redirige al usuario a la página de inicio
              console.log('Registro exitoso', response);
              this.router.navigate(['/inicio']);
            },
            (error) => {
              // Maneja errores de registro
              console.error('Error al registrar', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error al verificar el nombre de usuario', error);
      }
    );
  }
}