import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunaEditPageRoutingModule } from './runa-edit-routing.module';

import { RunaEditPage } from './runa-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunaEditPageRoutingModule
  ],
  declarations: [RunaEditPage]
})
export class RunaEditPageModule {}
