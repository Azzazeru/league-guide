import { Component } from '@angular/core';
import { ClienteService } from '../campeonService';
import { IRegistro } from '../interface/IRegistro';

@Component({
    selector: 'app-leer',
    templateUrl: './crud-leer-campeon.page.html',
    //styleUrls: ['./cliente.leer.page.scss'],
})
export class ClienteLeerPage {
    msgError = ""
    buttonEliminarDisabled = false
    buttonLeerDisabled = false
    buttonActualizarDisabled = false
    buttonCrearDisabled = false
    public id: string = '';
    registro:IRegistro = {
        id:"",
    nombre:"",
    titulo:"",
    descripcion:"",
    habilidadq:"",
    habilidadw:"",
    habilidade:"",
    habilidadr:""
    }



    constructor(private cliServ:ClienteService) { }
    
    leer() { 
        // El servicio retorna la dirección del objeto
        // Se actualiza de inmediato el HTML, ya que utilizas NGModel
        this.registro=this.cliServ.leerServicio(this.id)
        this.registro.id= "jajajajajajaj por referencia"
    }
    eliminar() { }
    grabar() { }
    actualizar() { }
    grabarActualizarAutomatico() { }
    // myBackButton() {this.location.back();}

}