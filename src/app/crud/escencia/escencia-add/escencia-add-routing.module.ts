import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-leer-mapa/crud-leer-mapa-routing.module.ts
import { ClienteLeerPage } from './crud-leer-mapa.page';
=======
import { EscenciaAddPage } from './escencia-add.page';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-add/escencia-add-routing.module.ts
=======
import { EscenciaAddPage } from './escencia-add.page';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-leer-mapa/crud-leer-mapa-routing.module.ts
    component: ClienteLeerPage
=======
    component: EscenciaAddPage
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-add/escencia-add-routing.module.ts
=======
    component: EscenciaAddPage
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-leer-mapa/crud-leer-mapa-routing.module.ts
export class LeerPageRoutingModule {}
=======
export class EscenciaAddPageRoutingModule {}
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-add/escencia-add-routing.module.ts
=======
export class EscenciaAddPageRoutingModule {}
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be
