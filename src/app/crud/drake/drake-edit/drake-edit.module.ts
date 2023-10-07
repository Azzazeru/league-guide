import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrakeEditPageRoutingModule } from './drake-edit-routing.module';

import { DrakeEditPage } from './drake-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrakeEditPageRoutingModule
  ],
  declarations: [DrakeEditPage]
})
export class DrakeEditPageModule {}
