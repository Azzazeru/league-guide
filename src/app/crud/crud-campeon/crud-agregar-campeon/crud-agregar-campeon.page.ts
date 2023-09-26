import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../campeonService';

@Component({
  selector: 'app-agregar',
  templateUrl: './crud-agregar-campeon.page.html',
  //styleUrls: ['./cliente.agregar.page.scss'],
})
export class ClienteAgregarPage {
  // Estructura registro, agrupa varios campos
  // Debieramos utilizar una interface
  registro={
    id:"",
    nombre:"",
    titulo:"",
    descripcion:"",
    habilidadq:"",
    habilidadw:"",
    habilidade:"",
    habilidadr:"",
  }
  constructor(private cliServ:ClienteService) { }
  // Método grabar, vacío
  grabar(){
    // Invocamos al método creado en el servicio
    // Le pasamos como parámetro la variable registro
    // registro, contiene todos los campos enlazados del Html
    this.cliServ.agregarServicio(this.registro)
  }
}