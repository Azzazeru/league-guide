import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './crud-agregar-noticia.page.html',
  //styleUrls: ['./cliente.agregar.page.scss'],
})
export class ClienteAgregarPage {
  // Estructura registro, agrupa varios campos
  // Debieramos utilizar una interface
  registro={
    id:"1",
    nombre:"rework darius",
    link:"www.lol.com"
  }
  constructor() { }
  // Método grabar, vacío
  grabar(){}

}