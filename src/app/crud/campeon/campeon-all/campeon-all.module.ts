import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonAllPageRoutingModule } from './campeon-all-routing.module';

import { CampeonAllPage } from './campeon-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonAllPageRoutingModule
  ],
  declarations: [CampeonAllPage]
})
export class CampeonAllPageModule {}
