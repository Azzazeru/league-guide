import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudNoticiaPageRoutingModule } from './crud-noticia-routing.module';

import { CrudNoticiaPage } from './crud-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudNoticiaPageRoutingModule
  ],
  declarations: [CrudNoticiaPage]
})
export class CrudNoticiaPageModule {}
