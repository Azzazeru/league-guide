import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscenciaAddPageRoutingModule } from './escencia-add-routing.module';

import { EscenciaAddPage } from './escencia-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscenciaAddPageRoutingModule
  ],
  declarations: [EscenciaAddPage]
})
export class EscenciaAddPageModule {}
