import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadCampeonAllPageRoutingModule } from './habilidad-campeon-all-routing.module';

import { HabilidadCampeonAllPage } from './habilidad-campeon-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilidadCampeonAllPageRoutingModule
  ],
  declarations: [HabilidadCampeonAllPage]
})
export class HabilidadCampeonAllPageModule {}
