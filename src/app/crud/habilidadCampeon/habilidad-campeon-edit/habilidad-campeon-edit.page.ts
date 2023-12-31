import { Component, OnInit } from '@angular/core';

// Imporamos librerías
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ClProducto } from '../model/ClHabilidadCampeon';
import { ProductServiceService } from '../habilidad-campeon-service.service';

@Component({
    selector: 'app-actualizar',
    templateUrl: './habilidad-campeon-edit.page.html',
    //styleUrls: ['./cliente.actualizar.page.scss'],
})
export class HabilidadCampeonEditPage implements OnInit {
    // FormGroup para validaciones
    productForm!: FormGroup;
    // Esquema a utilizar en el Html
    producto: ClProducto = { id: 1, idCampeon: 1, q: '', qDesc: '', w: '', wDesc: '', e: '', eDesc: '', r: '', rDesc: '' };
    id: any = '';

    constructor(public restApi: ProductServiceService,
        public loadingController: LoadingController,
        public alertController: AlertController,
        public route: ActivatedRoute,
        public router: Router,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
        // Relizamos lectura
        this.getProduct(this.route.snapshot.params['id']);
        // Especificamos Validaciones por medio de FormGroup
        this.productForm = this.formBuilder.group({
            "idCampeon": [null, Validators.required],
            'qt': [null, Validators.required],
            'qd': [null, Validators.required],
            'wt': [null, Validators.required],
            'wd': [null, Validators.required],
            'et': [null, Validators.required],
            'ed': [null, Validators.required],
            'rt': [null, Validators.required],
            'rd': [null, Validators.required]
        });
    }

    // Método que permite leer el producto
    async getProduct(id: number) {
        // Crea Wait
        const loading = await this.loadingController.create({
            message: 'Loading...'
        });
        // Muestra Wait
        await loading.present();
        // Obtiene el Observable
        this.restApi.getProduct(id + "")
            .subscribe({
                next: (data) => {
                    console.log("getProductID data****");
                    console.log(data);
                    // Si funciona Rescata el los datos
                    this.id = data.id;
                    // Actualiza los datos
                    this.productForm.setValue({
                        "idCampeon": data.idCampeon, 
                        'qt': data.q,
                        'qd': data.qDesc,
                        'wt': data.q,
                        'wd': data.wDesc,
                        'et': data.e,
                        'ed': data.eDesc,
                        'rt': data.r,
                        'rd': data.rDesc,
                    });
                    loading.dismiss();
                },
                complete: () => { },
                error: (err) => {
                    console.log("getProductID Errr****+");
                    console.log(err);
                    loading.dismiss();
                }
            })
    }

    // Método que actualiza el producto por medio de submit
    async onFormSubmit(form: NgForm) {
        console.log("onFormSubmit ID:" + this.id)
        this.producto.id = this.id;
        /*this.producto.nombre = form.prod_name;
        this.producto.descripcion = form.prod_desc;
        this.producto.precio = form.prod_price;
        this.producto.cantidad = form.prod_cantidad;
        */
        // si envio form, envio los nombres del campo del formulario
        //await this.restApi.updateProduct(this.id, form)
        this.restApi.updateProduct(this.id, this.producto)
            .subscribe({
                next: (res) => {
                    let id = res['id'];
                    //this.router.navigate([ 'detail', { outlets: { details: id }} ]);
                    //this.router.navigate(['/product-detail/' + this.id]);
                    this.router.navigate(['/habilidad-campeon-list']);
                },
                complete: () => { },
                error: (err) => { console.log(err); }
            })

    }

}