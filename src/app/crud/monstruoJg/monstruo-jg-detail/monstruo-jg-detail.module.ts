import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonstruoJgDetailPageRoutingModule } from './monstruo-jg-detail-routing.module';

import { MonstruoJgDetailPage } from './monstruo-jg-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonstruoJgDetailPageRoutingModule
  ],
  declarations: [MonstruoJgDetailPage]
})
export class MonstruoJgDetailPageModule {}
