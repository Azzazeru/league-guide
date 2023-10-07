import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoAllPageRoutingModule } from './modo-all-routing.module';

import { ModoAllPage } from './modo-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoAllPageRoutingModule
  ],
  declarations: [ModoAllPage]
})
export class ModoAllPageModule {}
