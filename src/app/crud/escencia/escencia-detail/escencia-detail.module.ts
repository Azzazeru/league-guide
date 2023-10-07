import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscenciaDetailPageRoutingModule } from './escencia-detail-routing.module';

import { EscenciaDetailPage } from './escencia-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscenciaDetailPageRoutingModule
  ],
  declarations: [EscenciaDetailPage]
})
export class EscenciaDetailPageModule {}
