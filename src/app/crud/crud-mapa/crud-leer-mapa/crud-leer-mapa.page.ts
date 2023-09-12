import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-leer-mapa',
  templateUrl: './crud-leer-mapa.page.html',
  styleUrls: ['./crud-leer-mapa.page.scss'],
})
export class CrudLeerMapaPage implements OnInit {

  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  public id: String = '';
  registro = {
    id:"",
    nombres:"",
    titulo:"",
    descripcion:"",
    cantidad_azul:"",
    cantidad_rojo:"",
    tematica_especial:"",
    reglas_especiales:"",
  }



  constructor() { }

  leer() { }
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
  ngOnInit() {
  }
}
