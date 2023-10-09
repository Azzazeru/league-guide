import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonListPageRoutingModule } from './campeon-list-routing.module';

import { CampeonListPage } from './campeon-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonListPageRoutingModule
  ],
  declarations: [CampeonListPage]
})
export class CampeonListPageModule {}
