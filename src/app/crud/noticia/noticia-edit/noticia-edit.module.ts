import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaEditPageRoutingModule } from './noticia-edit-routing.module';

import { NoticiaEditPage } from './noticia-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NoticiaEditPage]
})
export class NoticiaEditPageModule {}
