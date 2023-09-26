import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../noticiaService';

@Component({
  selector: 'app-eliminar',
  templateUrl: './crud-eliminar-noticia.page.html',
  //styleUrls: ['./eliminar.page.scss'],
})
export class ClienteEliminarPage {

  id="0"

 // Observe que en el constructor injectamos el ClienteService
  // Le asignamos un nombre el cual utilizaremos más adelante
  constructor(private cliServ:ClienteService) { }

  grabar(){
    // Invocamos al método creado en el servicio
    // Le pasamos como parámetro el ID 
    this.cliServ.eliminarServicio(this.id)
  }

}