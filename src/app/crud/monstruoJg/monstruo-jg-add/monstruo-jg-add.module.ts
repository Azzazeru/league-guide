import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonstruoJgAddPageRoutingModule } from './monstruo-jg-add-routing.module';

import { MonstruoJgAddPage } from './monstruo-jg-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonstruoJgAddPageRoutingModule
  ],
  declarations: [MonstruoJgAddPage]
})
export class MonstruoJgAddPageModule {}
