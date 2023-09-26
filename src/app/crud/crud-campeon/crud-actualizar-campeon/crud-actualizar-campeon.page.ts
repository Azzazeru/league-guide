import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../campeonService';

@Component({
    selector: 'app-actualizar',
    templateUrl: './crud-actualizar-campeon.page.html',
    //styleUrls: ['./cliente.actualizar.page.scss'],
})
export class ClienteActualizarPage {
    id = "1"
    registro = {
        nombre: "",
        titulo:"",
        descripcion:"",
        habilidadq:"",
        habilidadw:"",
        habilidade:"",
        habilidadr:"",
    }

    constructor(private cliServ:ClienteService) { }

    grabar() { 
        // Invocamos al método creado en el servicio
        // Le pasamos como parámetro el ID y la variable registro
        // registro, contiene todos los campos enlazados del Html
        this.cliServ.actualizarServicio(this.id,this.registro)
    }


}