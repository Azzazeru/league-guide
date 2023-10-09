import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrakeAllPageRoutingModule } from './drake-all-routing.module';

import { DrakeAllPage } from './drake-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrakeAllPageRoutingModule
  ],
  declarations: [DrakeAllPage]
})
export class DrakeAllPageModule {}
