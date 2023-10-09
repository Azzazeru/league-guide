import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoListPageRoutingModule } from './modo-list-routing.module';

import { ModoListPage } from './modo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoListPageRoutingModule
  ],
  declarations: [ModoListPage]
})
export class ModoListPageModule {}
