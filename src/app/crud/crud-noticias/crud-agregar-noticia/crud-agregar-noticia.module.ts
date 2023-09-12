import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ClienteAgregarPageRoutingModule } from './crud-agregar-noticia-routing.module';
import { ClienteAgregarPage } from './crud-agregar-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteAgregarPageRoutingModule,

  ],
  declarations: [ClienteAgregarPage]
})
export class CrudAgregarNoticiaPageModule {}