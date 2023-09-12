import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-listar-modo',
  templateUrl: './crud-listar-modo.page.html',
  styleUrls: ['./crud-listar-modo.page.scss'],
})

export class CrudListarModoPage implements OnInit {

  registros= [{id:"1",nombre:"Partida Normal",mapa:"Grieta del Invocador"}
             ,{id:"2",nombre:"ARAM",mapa:"Abismo de los Lamentos"}
             ,{id:"3",nombre:"2vs2",mapa:"Notengoideaxd"}]

  constructor() { }

  ngOnInit() {
  }

}
