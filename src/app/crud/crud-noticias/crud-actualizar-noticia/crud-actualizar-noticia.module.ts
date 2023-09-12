import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteActualizarPageRoutingModule } from './crud-actualizar-noticia-routing.module';

import { ClienteActualizarPage } from './crud-actualizar-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteActualizarPageRoutingModule
  ],
  declarations: [ClienteActualizarPage]
})
export class CrudActualizarNoticiaPageModule {}