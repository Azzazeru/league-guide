import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';

import { NoticiaAddPageRoutingModule } from './noticia-add-routing.module';

import { NoticiaAddPage } from './noticia-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NoticiaAddPage]
})
export class NoticiaAddPageModule {}
