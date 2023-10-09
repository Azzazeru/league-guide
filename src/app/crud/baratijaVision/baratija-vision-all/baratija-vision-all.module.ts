import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaratijaVisionAllPageRoutingModule } from './baratija-vision-all-routing.module';

import { BaratijaVisionAllPage } from './baratija-vision-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaratijaVisionAllPageRoutingModule
  ],
  declarations: [BaratijaVisionAllPage]
})
export class BaratijaVisionAllPageModule {}
