import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotinListPageRoutingModule } from './botin-list-routing.module';

import { BotinListPage } from './botin-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotinListPageRoutingModule
  ],
  declarations: [BotinListPage]
})
export class BotinListPageModule {}
