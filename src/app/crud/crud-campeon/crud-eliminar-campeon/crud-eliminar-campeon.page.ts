import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../campeonService';

@Component({
  selector: 'app-eliminar',
  templateUrl: './crud-eliminar-campeon.page.html',
  //styleUrls: ['./eliminar.page.scss'],
})
export class ClienteEliminarPage {

  id="0"

  constructor(private cliServ:ClienteService) { }

  grabar(){
    // Invocamos al método creado en el servicio
    // Le pasamos como parámetro el ID 
    this.cliServ.eliminarServicio(this.id)

  } 

}