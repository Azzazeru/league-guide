import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoAddPageRoutingModule } from './modo-add-routing.module';

import { ModoAddPage } from './modo-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoAddPageRoutingModule
  ],
  declarations: [ModoAddPage]
})
export class ModoAddPageModule {}
