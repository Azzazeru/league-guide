import { Component, OnInit } from '@angular/core';

// Import a utilizar 
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { ClProducto } from '../model/ClCampeon';
import { ProductServiceService } from '../campeon-service.service';

@Component({
    selector: 'app-noticia-detail',
    templateUrl: './campeon-detail.page.html',
    //   styleUrls: ['./noticia-detail.page.scss'],
})
export class CampeonDetailPage implements OnInit {

    // Creamos registro a utilizar en el Html
    producto: ClProducto = {
        id: 1
        , nombre: ''
        , titulo: ''
        , fechaDeSalida: ''
    };

    constructor(public restApi: ProductServiceService
        , public loadingController: LoadingController
        , public alertController: AlertController
        , public route: ActivatedRoute
        , public router: Router) { }

    ngOnInit() {
        this.getProduct();
    }

    // Método que permite leer el producto
    async getProduct() {
        console.log("getProduct **************** ParamMap ID:" + this.route.snapshot.paramMap.get('id'));
        // Creamos un Wait
        const loading = await this.loadingController.create({ message: 'Loading...' });
        // Mostramos el Wait
        await loading.present();
        await this.restApi.getProduct(this.route.snapshot.paramMap.get('id')!)
            .subscribe({
                next: (res) => {
                    console.log("Data *****************");
                    console.log(res);
                    // Si funciona la respuesta la pasamos al producto
                    this.producto = res;
                    loading.dismiss();
                }
                , complete: () => { }
                , error: (err) => {
                    //Si no funcion desplegamos en consola el error
                    console.log("Error DetailProduct Página", err);
                    loading.dismiss(); //Elimina la espera
                }
            })
    }

    async delete(id: number) {
        // Confirma Primero
        this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo cantrario Cancele');
    }

    // Creamos una rutina para confirmar la eliminación
    async presentAlertConfirm(id: number, msg: string) {
        const alert = await this.alertController.create({
            header: 'Warning!', // Título
            message: msg,   // Mensaje
            buttons: [   // Botones
                {
                    text: 'Eliminar : ' + id + " OK",
                    handler: () => { // Si presiona ejecuta esto
                        //this.router.navigate(['']);
                        this.deleteConfirmado(id)
                    }
                }
            ]
        });
        // Presenta en pantalla
        await alert.present();
    }

    // Es invocado desde el Alert
    async deleteConfirmado(id: number) {
        alert("Eliminando " + id)
        const loading = await this.loadingController.create({
            message: 'Loading...'
        });
        await loading.present();
        // LLama al método del servicio
        await this.restApi.deleteProduct(id)
            .subscribe({
                next: (res) => {
                    console.log("Error DetailProduct Página", res);
                    loading.dismiss();
                    this.router.navigate(['/campeon-list']);
                }
                , complete: () => { }
                , error: (err) => {
                    console.log("Error DetailProduct Página", err);
                    loading.dismiss(); //Elimina la espera
                }

            })
    }

}
