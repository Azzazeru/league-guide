import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-actualizar',
    templateUrl: './crud-actualizar-noticia.page.html',
    //styleUrls: ['./cliente.actualizar.page.scss'],
})
export class ClienteActualizarPage {
    id = "1"
    registro = {
        nombre: "Rework Skarner",
        link: "www.lol.es"
    }

    constructor() { }

    grabar() { }

  }
