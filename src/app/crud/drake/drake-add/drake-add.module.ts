import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrakeAddPageRoutingModule } from './drake-add-routing.module';

import { DrakeAddPage } from './drake-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrakeAddPageRoutingModule
  ],
  declarations: [DrakeAddPage]
})
export class DrakeAddPageModule {}
