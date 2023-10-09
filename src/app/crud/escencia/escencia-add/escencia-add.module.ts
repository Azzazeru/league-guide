import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD:src/app/crud/crud-mapa/crud-leer-mapa/crud-leer-mapa.module.ts
import { LeerPageRoutingModule } from './crud-leer-mapa-routing.module';

import { ClienteLeerPage } from './crud-leer-mapa.page';
=======
import { EscenciaAddPageRoutingModule } from './escencia-add-routing.module';

import { EscenciaAddPage } from './escencia-add.page';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-add/escencia-add.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-leer-mapa/crud-leer-mapa.module.ts
    LeerPageRoutingModule
  ],
  declarations: [ClienteLeerPage]
=======
    EscenciaAddPageRoutingModule
  ],
  declarations: [EscenciaAddPage]
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-add/escencia-add.module.ts
})
export class EscenciaAddPageModule {}
