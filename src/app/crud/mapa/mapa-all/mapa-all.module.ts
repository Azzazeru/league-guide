import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaAllPageRoutingModule } from './mapa-all-routing.module';

import { MapaAllPage } from './mapa-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaAllPageRoutingModule
  ],
  declarations: [MapaAllPage]
})
export class MapaAllPageModule {}
