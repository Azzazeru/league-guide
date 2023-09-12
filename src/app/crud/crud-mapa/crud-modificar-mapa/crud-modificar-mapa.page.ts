import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-modificar-mapa',
  templateUrl: './crud-modificar-mapa.page.html',
  styleUrls: ['./crud-modificar-mapa.page.scss'],
})
export class CrudModificarMapaPage implements OnInit {

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
