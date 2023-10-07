import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotinDetailPageRoutingModule } from './botin-detail-routing.module';

import { BotinDetailPage } from './botin-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotinDetailPageRoutingModule
  ],
  declarations: [BotinDetailPage]
})
export class BotinDetailPageModule {}
