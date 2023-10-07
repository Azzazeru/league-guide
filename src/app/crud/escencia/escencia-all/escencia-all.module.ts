import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscenciaAllPageRoutingModule } from './escencia-all-routing.module';

import { EscenciaAllPage } from './escencia-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscenciaAllPageRoutingModule
  ],
  declarations: [EscenciaAllPage]
})
export class EscenciaAllPageModule {}
