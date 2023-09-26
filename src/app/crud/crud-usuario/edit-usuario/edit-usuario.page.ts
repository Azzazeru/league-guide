// Importamos Librerías
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/ClUsuario';

import { ProductServiceService } from '../service-usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.page.html',
  styleUrls: ['./edit-usuario.page.scss'],
})
export class EditUsuarioPage implements OnInit {

  // Creamos la Variable para el Html
  productos: ClProducto[] = [];

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
  await this.restApi.getProducts()
    .subscribe({
      next: (res) => { 
        console.log("Res:" + res);
// Si funciona asigno el resultado al arreglo productos
        this.productos = res;
        console.log("thisProductos:",this.productos);
        loading.dismiss();
      }
      , complete: () => { }
      , error: (err) => {
// Si da error, imprimo en consola.
        console.log("Err:" + err);
        loading.dismiss();
      }
    })
}

}
