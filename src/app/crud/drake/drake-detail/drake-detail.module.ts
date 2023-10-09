import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrakeDetailPageRoutingModule } from './drake-detail-routing.module';

import { DrakeDetailPage } from './drake-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrakeDetailPageRoutingModule
  ],
  declarations: [DrakeDetailPage]
})
export class DrakeDetailPageModule {}
