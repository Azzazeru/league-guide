import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-listar-item',
  templateUrl: './crud-listar-item.page.html',
  styleUrls: ['./crud-listar-item.page.scss'],
})
export class CrudListarItemPage{

  // Arreglo, de prueba, mientras se crean los servicios

  registros= [{id:"1",nombre:"Escudo de Doran",titulo:"Item-Basico",descripcion:"Item basico para empezar la partida"}
             ,{id:"2",nombre:"Espada de Doran",titulo:"Item-Basico"}
             ,{id:"3",nombre:"Anillo de Doran",titulo:"Item-Basico"}]

  constructor() { }

}
