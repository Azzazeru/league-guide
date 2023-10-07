import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotinAddPageRoutingModule } from './botin-add-routing.module';

import { BotinAddPage } from './botin-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotinAddPageRoutingModule
  ],
  declarations: [BotinAddPage]
})
export class BotinAddPageModule {}
