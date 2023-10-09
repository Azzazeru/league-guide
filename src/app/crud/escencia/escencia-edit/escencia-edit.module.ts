import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscenciaEditPageRoutingModule } from './escencia-edit-routing.module';

import { EscenciaEditPage } from './escencia-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscenciaEditPageRoutingModule
  ],
  declarations: [EscenciaEditPage]
})
export class EscenciaEditPageModule {}
