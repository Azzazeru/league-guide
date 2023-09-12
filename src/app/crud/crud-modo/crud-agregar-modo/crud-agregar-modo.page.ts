import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-agregar-modo',
  templateUrl: './crud-agregar-modo.page.html',
  styleUrls: ['./crud-agregar-modo.page.scss'],
})
export class CrudAgregarModoPage {
  registro={
    id:"",
    nombres:"",
    mapa:""

  }
  

  constructor() { }

  grabar() {
  }

}
