import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadCampeonListPageRoutingModule } from './habilidad-campeon-list-routing.module';

import { HabilidadCampeonListPage } from './habilidad-campeon-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilidadCampeonListPageRoutingModule
  ],
  declarations: [HabilidadCampeonListPage]
})
export class HabilidadCampeonListPageModule {}
