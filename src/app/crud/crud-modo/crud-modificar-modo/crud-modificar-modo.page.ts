import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-modificar-modo',
  templateUrl: './crud-modificar-modo.page.html',
  styleUrls: ['./crud-modificar-modo.page.scss'],
})
export class CrudModificarModoPage {
  id = "1"
    registro = {
        nombres: "",
        titulo:"",
        mapa: ""
    }

  constructor() { }

  grabar() {
  }

}
