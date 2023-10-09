import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaratijaVisionAddPageRoutingModule } from './baratija-vision-add-routing.module';

import { BaratijaVisionAddPage } from './baratija-vision-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaratijaVisionAddPageRoutingModule
  ],
  declarations: [BaratijaVisionAddPage]
})
export class BaratijaVisionAddPageModule {}
