import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaListPageRoutingModule } from './noticia-list-routing.module';

import { NoticiaListPage } from './noticia-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaListPageRoutingModule
  ],
  declarations: [NoticiaListPage]
})
export class NoticiaListPageModule {}
