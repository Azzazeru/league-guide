import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-item',
  templateUrl: './crud-item.page.html',
  styleUrls: ['./crud-item.page.scss'],
})
export class CrudItemPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAgregar() {
    this.router.navigate(['/crud-agregar-item']);
  }

  redirectToActualizar() {
    this.router.navigate(['/crud-actualizar-item']);
  }

  redirectToEliminar() {
    this.router.navigate(['/crud-eliminar-item']);
  }

  redirectToLeer() {
    this.router.navigate(['/crud-leer-item']);
  }

  redirectToListar() {
    this.router.navigate(['/crud-listar-item']);
  }

}
