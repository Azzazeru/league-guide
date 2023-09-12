import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './crud-listar-noticia.page.html',
  //styleUrls: ['./cliente.page.scss'],
})
export class ListarClientePage {

  // Arreglo, de prueba, mientras se crean los servicios

  registros= 
  [{id:"1",nombres:"NUEVO PERSONAJE",link:"www.lol.com"},
{id:"2",nombres:"REWORK SKARNER",link:"www.movistar/lol.es"},
{id:"3",nombres:"ELIMINAN TEEMO",link:"www.lol.es"},
{id:"4",nombres:"NUEVO MODO DE JUEGO",link:"www.movistar/lol.es"},
{id:"5",nombres:"REWORK DARIUS",link:"www.movistar/lol.es"}];

  constructor() { }

}