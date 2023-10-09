import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD:src/app/crud/crud-mapa/crud-agregar-mapa/crud-agregar-mapa-routing.module.ts
import { ProductAddPage } from './crud-agregar-mapa.page';
=======
import { EscenciaDetailPage } from './escencia-detail.page';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-detail/escencia-detail-routing.module.ts

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-agregar-mapa/crud-agregar-mapa-routing.module.ts
    component: ProductAddPage
=======
    component: EscenciaDetailPage
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-detail/escencia-detail-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-agregar-mapa/crud-agregar-mapa-routing.module.ts
export class ClienteAgregarPageRoutingModule {}
=======
export class EscenciaDetailPageRoutingModule {}
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/escencia/escencia-detail/escencia-detail-routing.module.ts
