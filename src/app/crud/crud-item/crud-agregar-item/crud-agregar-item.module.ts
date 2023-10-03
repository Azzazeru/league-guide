import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ClienteAgregarPageRoutingModule } from './crud-agregar-item-routing.module';
import { ProductAddPage } from './crud-agregar-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteAgregarPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [ProductAddPage]
})
export class CrudAgregarItemPageModule {}
