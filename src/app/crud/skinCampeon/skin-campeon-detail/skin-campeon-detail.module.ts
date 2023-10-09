import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinCampeonDetailPageRoutingModule } from './skin-campeon-detail-routing.module';

import { SkinCampeonDetailPage } from './skin-campeon-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinCampeonDetailPageRoutingModule
  ],
  declarations: [SkinCampeonDetailPage]
})
export class SkinCampeonDetailPageModule {}
