import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HechizoEditPageRoutingModule } from './hechizo-edit-routing.module';

import { HechizoEditPage } from './hechizo-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HechizoEditPageRoutingModule
  ],
  declarations: [HechizoEditPage]
})
export class HechizoEditPageModule {}
