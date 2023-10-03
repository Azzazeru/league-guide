import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { MapaAddPageRoutingModule } from './mapa-add-routing.module';

import { MapaAddPage } from './mapa-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MapaAddPage]
})
export class NoticiaAddPageModule {}
