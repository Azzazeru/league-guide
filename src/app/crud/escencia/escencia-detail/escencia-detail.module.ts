import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-agregar-mapa/crud-agregar-mapa.module.ts
import { ClienteAgregarPageRoutingModule } from './crud-agregar-mapa-routing.module';
import { ProductAddPage } from './crud-agregar-mapa.page';
=======
=======
import { IonicModule } from '@ionic/angular';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be

import { EscenciaDetailPageRoutingModule } from './escencia-detail-routing.module';

import { EscenciaDetailPage } from './escencia-detail.page';
<<<<<<< HEAD
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-detail/escencia-detail.module.ts
=======
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
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
=======
    EscenciaDetailPageRoutingModule
  ],
  declarations: [EscenciaDetailPage]
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be
})
export class EscenciaDetailPageModule {}
