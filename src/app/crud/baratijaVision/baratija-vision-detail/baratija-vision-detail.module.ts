import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaratijaVisionDetailPageRoutingModule } from './baratija-vision-detail-routing.module';

import { BaratijaVisionDetailPage } from './baratija-vision-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaratijaVisionDetailPageRoutingModule
  ],
  declarations: [BaratijaVisionDetailPage]
})
export class BaratijaVisionDetailPageModule {}
