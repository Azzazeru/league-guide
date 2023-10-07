import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaratijaVisionEditPageRoutingModule } from './baratija-vision-edit-routing.module';

import { BaratijaVisionEditPage } from './baratija-vision-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaratijaVisionEditPageRoutingModule
  ],
  declarations: [BaratijaVisionEditPage]
})
export class BaratijaVisionEditPageModule {}
