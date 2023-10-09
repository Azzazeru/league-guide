import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HechizoAllPageRoutingModule } from './hechizo-all-routing.module';

import { HechizoAllPage } from './hechizo-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HechizoAllPageRoutingModule
  ],
  declarations: [HechizoAllPage]
})
export class HechizoAllPageModule {}
