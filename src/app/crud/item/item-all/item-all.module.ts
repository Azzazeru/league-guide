import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemAllPageRoutingModule } from './item-all-routing.module';

import { ItemAllPage } from './item-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemAllPageRoutingModule
  ],
  declarations: [ItemAllPage]
})
export class ItemAllPageModule {}
