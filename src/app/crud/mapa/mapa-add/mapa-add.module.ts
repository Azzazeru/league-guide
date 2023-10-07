import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaAddPageRoutingModule } from './mapa-add-routing.module';

import { MapaAddPage } from './mapa-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaAddPageRoutingModule
  ],
  declarations: [MapaAddPage]
})
export class MapaAddPageModule {}
