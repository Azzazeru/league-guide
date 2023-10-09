import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinCampeonListPageRoutingModule } from './skin-campeon-list-routing.module';

import { SkinCampeonListPage } from './skin-campeon-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkinCampeonListPageRoutingModule
  ],
  declarations: [SkinCampeonListPage]
})
export class SkinCampeonListPageModule {}
