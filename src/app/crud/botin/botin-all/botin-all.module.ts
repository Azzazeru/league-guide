import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotinAllPageRoutingModule } from './botin-all-routing.module';

import { BotinAllPage } from './botin-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotinAllPageRoutingModule
  ],
  declarations: [BotinAllPage]
})
export class BotinAllPageModule {}
