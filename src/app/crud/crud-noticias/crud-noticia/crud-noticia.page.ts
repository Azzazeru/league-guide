import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-noticia',
  templateUrl: './crud-noticia.page.html',
  styleUrls: ['./crud-noticia.page.scss'],
})
export class CrudNoticiaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAgregar() {
    this.router.navigate(['/crud-agregar-noticia']);
  }

  redirectToActualizar() {
    this.router.navigate(['/crud-actualizar-noticia']);
  }

  redirectToEliminar() {
    this.router.navigate(['/crud-eliminar-noticia']);
  }

  redirectToLeer() {
    this.router.navigate(['/crud-leer-noticia']);
  }

  redirectToListar() {
    this.router.navigate(['/crud-listar-noticia']);
  }


}
