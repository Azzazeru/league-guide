import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD:src/app/crud/crud-mapa/crud-listar-mapa/crud-listar-mapa.module.ts
import { ListarPageRoutingModule } from './crud-listar-mapa-routing.module';
import { ListarClientePage } from './crud-listar-mapa.page';
=======
import { EscenciaAllPageRoutingModule } from './escencia-all-routing.module';

import { EscenciaAllPage } from './escencia-all.page';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-all/escencia-all.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-listar-mapa/crud-listar-mapa.module.ts
    ListarPageRoutingModule
  ],
  declarations: [ListarClientePage]
})
export class CrudListarMapaPageModule {}
=======
    EscenciaAllPageRoutingModule
  ],
  declarations: [EscenciaAllPage]
})
export class EscenciaAllPageModule {}
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-all/escencia-all.module.ts
