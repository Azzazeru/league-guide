import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotinEditPageRoutingModule } from './botin-edit-routing.module';

import { BotinEditPage } from './botin-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotinEditPageRoutingModule
  ],
  declarations: [BotinEditPage]
})
export class BotinEditPageModule {}
