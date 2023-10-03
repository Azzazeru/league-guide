import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaDetailPageRoutingModule } from './mapa-detail-routing.module';

import { MapaDetailPage } from './mapa-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaDetailPageRoutingModule
  ],
  declarations: [MapaDetailPage]
})
export class MapaDetailPageModule {}
