import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RunaDetailPageRoutingModule } from './runa-detail-routing.module';

import { RunaDetailPage } from './runa-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RunaDetailPageRoutingModule
  ],
  declarations: [RunaDetailPage]
})
export class RunaDetailPageModule {}
