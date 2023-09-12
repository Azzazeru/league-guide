import { Component } from '@angular/core';
@Component({
    selector: 'app-leer',
    templateUrl: './crud-leer-noticia.page.html',
    //styleUrls: ['./cliente.leer.page.scss'],
})
export class ClienteLeerPage {
    msgError = ""
    buttonEliminarDisabled = false
    buttonLeerDisabled = false
    buttonActualizarDisabled = false
    buttonCrearDisabled = false
    public id: String = '';
    registro = {
        nombre: ''
        , link: ''
    }



    constructor() { }

    leer() { }
    eliminar() { }
    grabar() { }
    actualizar() { }
    grabarActualizarAutomatico() { }
    // myBackButton() {this.location.back();}

}