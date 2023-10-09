import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HechizoListPageRoutingModule } from './hechizo-list-routing.module';

import { HechizoListPage } from './hechizo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HechizoListPageRoutingModule
  ],
  declarations: [HechizoListPage]
})
export class HechizoListPageModule {}
