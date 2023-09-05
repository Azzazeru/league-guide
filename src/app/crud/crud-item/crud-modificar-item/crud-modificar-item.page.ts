import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-modificar-item',
  templateUrl: './crud-modificar-item.page.html',
  styleUrls: ['./crud-modificar-item.page.scss'],
})
export class CrudModificarItemPage{
  id = "1"
  registro = {
      nombres: "",
      titulo:"",
      descripcion:"",
      habilidadq:"",
      habilidadw:"",
      habilidade:"",
      habilidadr:"",
  }

  constructor() { }

  grabar() { }


}
