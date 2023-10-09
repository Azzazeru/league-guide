import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscenciaListPageRoutingModule } from './escencia-list-routing.module';

import { EscenciaListPage } from './escencia-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscenciaListPageRoutingModule
  ],
  declarations: [EscenciaListPage]
})
export class EscenciaListPageModule {}
