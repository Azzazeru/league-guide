import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaListPageRoutingModule } from './mapa-list-routing.module';

import { MapaListPage } from './mapa-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaListPageRoutingModule
  ],
  declarations: [MapaListPage]
})
export class MapaListPageModule {}
