import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAgregar() {
    this.router.navigate(['/add-usuario']);
  }

  redirectToActualizar() {
    this.router.navigate(['/edit-usuario/1']);
  }

  redirectToDetail() {
    this.router.navigate(['/detail-usuario/1']);
  }

  redirectToAll() {
    this.router.navigate(['/all-usuarion']);
  }

  redirectToListar() {
    this.router.navigate(['/list-usuario']);
  }

}
