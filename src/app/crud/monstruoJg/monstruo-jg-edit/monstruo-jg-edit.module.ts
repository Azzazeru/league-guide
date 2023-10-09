import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonstruoJgEditPageRoutingModule } from './monstruo-jg-edit-routing.module';

import { MonstruoJgEditPage } from './monstruo-jg-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonstruoJgEditPageRoutingModule
  ],
  declarations: [MonstruoJgEditPage]
})
export class MonstruoJgEditPageModule {}
