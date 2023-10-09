import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaratijaVisionListPageRoutingModule } from './baratija-vision-list-routing.module';

import { BaratijaVisionListPage } from './baratija-vision-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaratijaVisionListPageRoutingModule
  ],
  declarations: [BaratijaVisionListPage]
})
export class BaratijaVisionListPageModule {}
