import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrakeListPageRoutingModule } from './drake-list-routing.module';

import { DrakeListPage } from './drake-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrakeListPageRoutingModule
  ],
  declarations: [DrakeListPage]
})
export class DrakeListPageModule {}
