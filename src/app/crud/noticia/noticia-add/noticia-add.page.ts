import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';

import { ClProducto } from '../model/ClNoticia';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../noticia-service.service';

@Component({
    selector: 'app-product-add',
    templateUrl: './noticia-add.page.html',
    // styleUrls: ['./product-add.page.scss'],
})
export class NoticiaAddPage implements OnInit {
    //Creamos una variable del tipo FormGroup
    // ! ==> Con esto le decimos a TS, que sabemos que la variable no esta inicializada
    //          y que estamos seguro que cuando se ejecute no será null
    productForm!: FormGroup;
    // Generalmente se usa una interface, sin embargo para jugar utilizaremos  una clase
    producto: ClProducto = {
        id: 0
        , nombre: ''
        , link: ''
    };

    // Injectamos FormBuilder, el cual nos permitirá realizar validaciones                         
    constructor(private formBuilder: FormBuilder,
        public loadingController: LoadingController,
        // Injectamos las librerías necesarias
        private restApi: ProductServiceService,
        private router: Router,
    ) { }

    // Antes que inicie en pantalla
    // especificamos las validaciones, 
    //    por medio de formBuilder injectado en el constructor
    ngOnInit() {
        // Especificamos que todos los campos son obligatorios
        this.productForm = this.formBuilder.group({
            "prod_name": [null, Validators.required],
            'prod_desc': [null, Validators.required],
        });
    }
    // se ejecutara cuando presione el Submit
    // se ejecutará cuando presione el Submit
    async onFormSubmit(form: NgForm) {
        console.log("onFormSubmit del Product ADD")
        // Creamos un Loading Controller, Ojo no lo muestra
        const loading = await this.loadingController.create({
            message: 'Loading...'
        });
        // Muestra el Loading Controller
        // Ejecuta el método del servicio y los suscribe
        await this.restApi.addProduct(this.producto)
            .subscribe({
                next: (res) => {
                    console.log("Next AddProduct Page", res)
                    loading.dismiss(); //Elimina la espera
                    if (res == null) { // No viene respuesta del registro
                        console.log("Next No Agrego, Ress Null ");
                        return
                    }
                    // Si viene respuesta
                    console.log("Next Agrego SIIIIII Router saltaré ;", this.router);
                    this.router.navigate(['/noticia-list']);
                }
                , complete: () => { }
                , error: (err) => {
                    console.log("Error AddProduct Página", err);
                    loading.dismiss(); //Elimina la espera
                }
            });
        console.log("Observe que todo lo del suscribe sale después de este mensaje")
    }




}