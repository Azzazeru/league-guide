import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonstruoJgAllPageRoutingModule } from './monstruo-jg-all-routing.module';

import { MonstruoJgAllPage } from './monstruo-jg-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonstruoJgAllPageRoutingModule
  ],
  declarations: [MonstruoJgAllPage]
})
export class MonstruoJgAllPageModule {}
