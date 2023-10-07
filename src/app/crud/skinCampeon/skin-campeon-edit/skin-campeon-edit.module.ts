import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinCampeonEditPageRoutingModule } from './skin-campeon-edit-routing.module';

import { SkinCampeonEditPage } from './skin-campeon-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinCampeonEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SkinCampeonEditPage]
})
export class SkinCampeonEditPageModule {}
