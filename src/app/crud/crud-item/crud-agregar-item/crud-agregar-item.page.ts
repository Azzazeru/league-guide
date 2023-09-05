import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-agregar-item',
  templateUrl: './crud-agregar-item.page.html',
  styleUrls: ['./crud-agregar-item.page.scss'],
})
export class CrudAgregarItemPage{
  // Estructura registro, agrupa varios campos
  // Debieramos utilizar una interface
  registro={
    id:"",
    nombres:"",
    titulo:"",
    descripcion:"",

  }
  constructor() { }
  // Método grabar, vacío
  grabar(){}

}
