import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-listar-mapa',
  templateUrl: './crud-listar-mapa.page.html',
  styleUrls: ['./crud-listar-mapa.page.scss'],
})
export class CrudListarMapaPage implements OnInit {

  registros= [{id:"1",nombre:"Grieta Del invocador",titulo:"5 ban permitidos",descripcion:"5 vs 5 sin reglas especiales"}
             ,{id:"2",nombre:"El Abismo de los Lamentos",titulo:"5 ban permitidos",descripcion:"5 vs 5 en un carril "}
             ,{id:"3",nombre:"Modo Arena",titulo:"5 ban permitidos",descripcion:"Modo 2 vs 2 vs 2 vs 2 con reglas especiales"}]
  constructor() { }

  ngOnInit() {
  }

}
