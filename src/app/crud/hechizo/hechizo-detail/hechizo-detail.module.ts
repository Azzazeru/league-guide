import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HechizoDetailPageRoutingModule } from './hechizo-detail-routing.module';

import { HechizoDetailPage } from './hechizo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HechizoDetailPageRoutingModule
  ],
  declarations: [HechizoDetailPage]
})
export class HechizoDetailPageModule {}
