import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonDetailPageRoutingModule } from './campeon-detail-routing.module';

import { CampeonDetailPage } from './campeon-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonDetailPageRoutingModule
  ],
  declarations: [CampeonDetailPage]
})
export class CampeonDetailPageModule {}
