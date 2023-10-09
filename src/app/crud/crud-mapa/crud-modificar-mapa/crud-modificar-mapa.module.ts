import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { ClienteActualizarPageRoutingModule } from './crud-modificar-mapa-routing.module';

import { ClienteActualizarPage } from './crud-modificar-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteActualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClienteActualizarPage]
})
export class CrudActualizarMapaPageModule {}