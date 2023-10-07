import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionAllPageRoutingModule } from './division-all-routing.module';

import { DivisionAllPage } from './division-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionAllPageRoutingModule
  ],
  declarations: [DivisionAllPage]
})
export class DivisionAllPageModule {}
