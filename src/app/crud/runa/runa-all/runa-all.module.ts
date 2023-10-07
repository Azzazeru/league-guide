import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunaAllPageRoutingModule } from './runa-all-routing.module';

import { RunaAllPage } from './runa-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunaAllPageRoutingModule
  ],
  declarations: [RunaAllPage]
})
export class RunaAllPageModule {}
