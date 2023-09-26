import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ClienteAgregarPageRoutingModule } from './crud-agregar-campeon-routing.module';
import { ClienteAgregarPage } from './crud-agregar-campeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteAgregarPageRoutingModule,

  ],
  declarations: [ClienteAgregarPage]
})
export class CrudAgregarCampeonPageModule {}
