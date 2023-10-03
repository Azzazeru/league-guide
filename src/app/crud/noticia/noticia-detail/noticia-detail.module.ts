import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiaDetailPageRoutingModule } from './noticia-detail-routing.module';

import { NoticiaDetailPage } from './noticia-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiaDetailPageRoutingModule
  ],
  declarations: [NoticiaDetailPage]
})
export class NoticiaDetailPageModule {}
