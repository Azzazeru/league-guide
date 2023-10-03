// Importamos Librerías
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/claseItem';

import { ProductServiceService } from '../itemService';

import { Component, OnInit} from '@angular/core';

// Importamos ClienteService y IRegistro
import { IRegistro } from '../interface/IRegistro';

@Component({
  selector: 'app-listar',
  templateUrl: './crud-listar-item.page.html',
  //styleUrls: ['./cliente.page.scss'],
})
export class ListarClientePage implements OnInit {

   // Creamos la Variable para el Html
   producto: ClProducto[] = [];


  // Recibimos la clase ClienteService 
  // por parámetro en el constructor(Injección)
  // Injectamos Librerias
 constructor(public restApi: ProductServiceService
  , public loadingController: LoadingController
  , public router: Router) { }

  // LLamamos al método que rescata los productos  
  ngOnInit() {
  this.getProducts();
}

    // Método  que rescta los productos
  async getProducts() {
    console.log("Entrando :getProducts");
    // Crea un Wait (Esperar)
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });
    // Muestra el Wait
    await loading.present();
    console.log("Entrando :");
    // Obtiene el Observable del servicio
    this.restApi.getProducts()
      .subscribe({
        next: (res) => {
          console.log("Res:" + res);
          // Si funciona asigno el resultado al arreglo productos
          this.producto = res;
          console.log("thisProductos:", this.producto);
          loading.dismiss();
        },
        complete: () => { },
        error: (err) => {
          // Si da error, imprimo en consola.
          console.log("Err:" + err);
          loading.dismiss();
        }
      })
  }
}