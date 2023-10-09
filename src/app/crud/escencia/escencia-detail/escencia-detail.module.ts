import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-agregar-mapa/crud-agregar-mapa.module.ts
import { ClienteAgregarPageRoutingModule } from './crud-agregar-mapa-routing.module';
import { ProductAddPage } from './crud-agregar-mapa.page';
=======

import { EscenciaDetailPageRoutingModule } from './escencia-detail-routing.module';

import { EscenciaDetailPage } from './escencia-detail.page';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-detail/escencia-detail.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-agregar-mapa/crud-agregar-mapa.module.ts
    ClienteAgregarPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [ProductAddPage]
=======
    EscenciaDetailPageRoutingModule
  ],
  declarations: [EscenciaDetailPage]
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-detail/escencia-detail.module.ts
})
export class EscenciaDetailPageModule {}
