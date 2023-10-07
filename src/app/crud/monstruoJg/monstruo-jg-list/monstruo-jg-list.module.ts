import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonstruoJgListPageRoutingModule } from './monstruo-jg-list-routing.module';

import { MonstruoJgListPage } from './monstruo-jg-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonstruoJgListPageRoutingModule
  ],
  declarations: [MonstruoJgListPage]
})
export class MonstruoJgListPageModule {}
