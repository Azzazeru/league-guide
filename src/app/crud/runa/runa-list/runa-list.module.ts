import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunaListPageRoutingModule } from './runa-list-routing.module';

import { RunaListPage } from './runa-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunaListPageRoutingModule
  ],
  declarations: [RunaListPage]
})
export class RunaListPageModule {}
