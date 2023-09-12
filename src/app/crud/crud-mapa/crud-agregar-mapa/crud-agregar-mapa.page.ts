import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-agregar-mapa',
  templateUrl: './crud-agregar-mapa.page.html',
  styleUrls: ['./crud-agregar-mapa.page.scss'],
})
export class CrudAgregarMapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  registro={
    id:"",
    nombres:"",
    titulo:"",
    descripcion:"",
    cantidad_azul:"",
    cantidad_rojo:"",
    tematica_especial:"",
    reglas_especiales:"",

  }
  grabar(){}
}
