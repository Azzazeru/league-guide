import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoEditPageRoutingModule } from './modo-edit-routing.module';

import { ModoEditPage } from './modo-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoEditPageRoutingModule
  ],
  declarations: [ModoEditPage]
})
export class ModoEditPageModule {}
