import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-leer-modo',
  templateUrl: './crud-leer-modo.page.html',
  styleUrls: ['./crud-leer-modo.page.scss'],
})
export class CrudLeerModoPage  {

  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  public id: String = '';
  registro = {
      id:"",
  nombres:"",
  mapa:""}



  constructor() { }

  leer() { }
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
  // myBackButton() {this.location.back();}


}
