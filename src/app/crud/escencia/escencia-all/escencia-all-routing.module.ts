import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD:src/app/crud/crud-mapa/crud-listar-mapa/crud-listar-mapa-routing.module.ts
import { ListarClientePage } from './crud-listar-mapa.page';
=======
import { EscenciaAllPage } from './escencia-all.page';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-all/escencia-all-routing.module.ts

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-listar-mapa/crud-listar-mapa-routing.module.ts
    component: ListarClientePage
=======
    component: EscenciaAllPage
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-all/escencia-all-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-listar-mapa/crud-listar-mapa-routing.module.ts
export class ListarPageRoutingModule {}
=======
export class EscenciaAllPageRoutingModule {}
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-all/escencia-all-routing.module.ts
