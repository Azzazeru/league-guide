import { Component} from '@angular/core';

// Importamos ClienteService y IRegistro
import {ClienteService } from '../mapaService';
import { IRegistro } from '../interface/IRegistro';

@Component({
  selector: 'app-listar',
  templateUrl: './crud-listar-mapa.page.html',
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
    this.registro.push({ id: "03", nombreMapa: "Modo Arena", banPermitido: "5 ban permitidos", descripcionMapa:"Es una pelea frenetica de 2 vs 2 vs 2 vs 2", cantidad_azul:"null", cantidad_rojo:"null",tematicaEspecial:"Arena 2 vs 2 vs 2 vs 2",reglasEspeciales:"Objetos especiales"})
    console.log("registroReferencia:",this.registro)

    // (get) Solicita una copia, duplica la memoria ocupada por el arreglo
    // Se agrega un registro localmente, no se altera el original
    this.registro=this.cliServ.getRegistrosCopia
    this.registro.push({ id: "03", nombreMapa: "Modo Arena", banPermitido: "5 ban permitidos", descripcionMapa:"Es una pelea frenetica de 2 vs 2 vs 2 vs 2", cantidad_azul:"null", cantidad_rojo:"null",tematicaEspecial:"Arena 2 vs 2 vs 2 vs 2",reglasEspeciales:"Objetos especiales"})
    console.log("registroCopia:",this.registro)

    // Utiliza un método
    // Agrega un registro en el original
    this.registro=this.cliServ.getRegistroMetodo();
    this.registro.push({ id: "03", nombreMapa: "Modo Arena", banPermitido: "5 ban permitidos", descripcionMapa:"Es una pelea frenetica de 2 vs 2 vs 2 vs 2", cantidad_azul:"null", cantidad_rojo:"null",tematicaEspecial:"Arena 2 vs 2 vs 2 vs 2",reglasEspeciales:"Objetos especiales"})
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
