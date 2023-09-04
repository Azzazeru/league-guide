import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteActualizarPage } from './crud-actualizar-campeon.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteActualizarPageRoutingModule {}