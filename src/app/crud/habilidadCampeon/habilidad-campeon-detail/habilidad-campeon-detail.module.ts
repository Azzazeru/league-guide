import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadCampeonDetailPageRoutingModule } from './habilidad-campeon-detail-routing.module';

import { HabilidadCampeonDetailPage } from './habilidad-campeon-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilidadCampeonDetailPageRoutingModule
  ],
  declarations: [HabilidadCampeonDetailPage]
})
export class HabilidadCampeonDetailPageModule {}
