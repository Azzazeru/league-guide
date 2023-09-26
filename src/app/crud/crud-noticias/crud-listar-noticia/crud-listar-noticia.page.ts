import { Component} from '@angular/core';

// Importamos ClienteService y IRegistro
import { ClienteService } from '../noticiaService';
import { IRegistro } from '../interface/IRegistro';

@Component({
  selector: 'app-listar',
  templateUrl: './crud-listar-noticia.page.html',
  //styleUrls: ['./cliente.page.scss'],
})
export class ListarClientePage {
 
  //  Referencia ==> Solo tiene la dirección de memoria
  //  No tiene sentido, solo la utilizamos para el ejemplo
  registro=this.cliServ.getRegistrosReferencia

  // Recibimos la clase ClienteService 
  // por parámetro en el constructor(Injección)
  constructor(private cliServ:ClienteService
          // Cuando es public la puedo utilizar en el HTML
              ,public cliServPublic:ClienteService
              ) { 

    // (get) Solicita la dirección del arreglo
    // pese que es un mètodo se utiliza como si fuera una variable 
    // Agrega un registro, lo realiza en el original            
    this.registro=this.cliServ.getRegistrosReferencia
    this.registro.push({id:"1",titulo:"AATROX OP",link:"P10"})
    console.log("registroReferencia:",this.registro)

    // (get) Solicita una copia, duplica la memoria ocupada por el arreglo
    // Se agrega un registro localmente, no se altera el original
    this.registro=this.cliServ.getRegistrosCopia
    this.registro.push({id:"1",titulo:"AATROX OP",link:"P10"})
    console.log("registroCopia:",this.registro)

    // Utiliza un método
    // Agrega un registro en el original
    this.registro=this.cliServ.getRegistroMetodo();
    this.registro.push({id:"1",titulo:"AATROX OP",link:"P10"})
    console.log("registroMetodo:",this.registro)
  }

  get getRegistros():IRegistro[]{
    // Solicita por medio de un acceador una copia 
    return this.cliServ.getRegistros
  }

  getRegistrosMetodo():IRegistro[]{
    // Solicita por medio de un acceador una copia 
    return this.cliServ.getRegistrosCopia
  }

}