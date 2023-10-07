import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaEditPageRoutingModule } from './mapa-edit-routing.module';

import { MapaEditPage } from './mapa-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaEditPageRoutingModule
  ],
  declarations: [MapaEditPage]
})
export class MapaEditPageModule {}
