import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudListarModoPageRoutingModule } from './crud-listar-modo-routing.module';

import { ListarClientePage } from './crud-listar-modo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudListarModoPageRoutingModule
  ],
  declarations: [ListarClientePage]
})
export class CrudListarModoPageModule {}
