import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-leer-item',
  templateUrl: './crud-leer-item.page.html',
  styleUrls: ['./crud-leer-item.page.scss'],
})
export class CrudLeerItemPage{
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  public id: String = '';
  registro = {
      id:"",
  nombres:"",
  titulo:"",
  descripcion:"",
  }



  constructor() { }

  leer() { }
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
  // myBackButton() {this.location.back();}

}
