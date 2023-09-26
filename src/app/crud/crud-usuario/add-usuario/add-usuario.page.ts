import { LoadingController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../service-usuario.service';

import { ClProducto } from '../model/ClUsuario';

@Component({
  selector: 'app-product-add',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  //Creamos una variable del tipo FormGroup
  // ! ==> Con esto le decimos a TS, que sabemos que la variable no esta inicializada
  //          y que estamos seguro que cuando se ejecute no será null
  productForm!: FormGroup;
  // Generalmente se usa una interface, sin embargo para jugar utilizaremos  una clase
  producto:ClProducto = { id: "1"
                        , nombre: 'Lycoris Radiata'
                        , contrasenia: 'Lycoris Radiata'
                        , servidor: "Las"};

  // Injectamos FormBuilder, el cual nos permitirá realizar validaciones                         
  constructor(private formBuilder: FormBuilder,
    // Injectamos las librerías necesarias
    private restApi: ProductServiceService,
    private router: Router,
    public loadingController: LoadingController,
    ) { }

  // Antes que inicie en pantalla
  // especificamos las validaciones, 
  //    por medio de formBuilder injectado en el constructor
  ngOnInit() {
    // Especificamos que todos los campos son obligatorios
    this.productForm = this.formBuilder.group({
      "prod_id" : [null, Validators.required],
      'prod_nombre' : [null, Validators.required],
      'prod_contrasenia' : [null, Validators.required],
      'prod_servidor' : [null, Validators.required]
    });
  }
   // se ejecutará cuando presione el Submit
  async onFormSubmit(form:NgForm) {  
    console.log("onFormSubmit del Product ADD")
    // Creamos un Loading Controller, Ojo no lo muestra
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Muestra el Loading Controller
    await loading.present();
    // Esperamos 10 segundos, por medio de una promesa
    // Cuidado si ejecutamos sin await pasan de largo
    // Ejecuta el método del servicio y los suscribe
    await this.restApi.addProduct(this.producto)
      .subscribe({
        next: (res) => {
          console.log("Next AddProduct Page",res)
          loading.dismiss(); //Elimina la espera
          if (res== null){ // No viene respuesta del registro
            console.log("Next No Agrego, Ress Null ");
            return
          }
          // Si viene respuesta
          console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
          this.router.navigate(['/product-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error AddProduct Página",err);
          loading.dismiss(); //Elimina la espera
        }
      });
    console.log("Observe que todo lo del suscribe sale después de este mensaje")
  

    }
}