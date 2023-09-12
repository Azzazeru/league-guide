import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteEliminarPageRoutingModule } from './crud-eliminar-noticia-routing.module';

import { ClienteEliminarPage } from './crud-eliminar-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteEliminarPageRoutingModule
  ],
  declarations: [ClienteEliminarPage]
})
export class CrudEliminarNoticiaPageModule {}
