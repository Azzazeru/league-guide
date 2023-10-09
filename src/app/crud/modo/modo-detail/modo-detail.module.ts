import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoDetailPageRoutingModule } from './modo-detail-routing.module';

import { ModoDetailPage } from './modo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoDetailPageRoutingModule
  ],
  declarations: [ModoDetailPage]
})
export class ModoDetailPageModule {}
