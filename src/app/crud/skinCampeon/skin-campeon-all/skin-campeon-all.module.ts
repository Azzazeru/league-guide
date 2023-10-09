import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinCampeonAllPageRoutingModule } from './skin-campeon-all-routing.module';

import { SkinCampeonAllPage } from './skin-campeon-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinCampeonAllPageRoutingModule
  ],
  declarations: [SkinCampeonAllPage]
})
export class SkinCampeonAllPageModule {}
