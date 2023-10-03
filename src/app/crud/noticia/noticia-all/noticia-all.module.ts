import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaAllPageRoutingModule } from './noticia-all-routing.module';

import { NoticiaAllPage } from './noticia-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaAllPageRoutingModule
  ],
  declarations: [NoticiaAllPage]
})
export class NoticiaAllPageModule {}
