import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionEditPageRoutingModule } from './division-edit-routing.module';

import { DivisionEditPage } from './division-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionEditPageRoutingModule
  ],
  declarations: [DivisionEditPage]
})
export class DivisionEditPageModule {}
