import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunaAddPageRoutingModule } from './runa-add-routing.module';

import { RunaAddPage } from './runa-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunaAddPageRoutingModule
  ],
  declarations: [RunaAddPage]
})
export class RunaAddPageModule {}
