import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HechizoAddPageRoutingModule } from './hechizo-add-routing.module';

import { HechizoAddPage } from './hechizo-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HechizoAddPageRoutingModule
  ],
  declarations: [HechizoAddPage]
})
export class HechizoAddPageModule {}
