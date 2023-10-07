import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionAddPageRoutingModule } from './division-add-routing.module';

import { DivisionAddPage } from './division-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionAddPageRoutingModule
  ],
  declarations: [DivisionAddPage]
})
export class DivisionAddPageModule {}
