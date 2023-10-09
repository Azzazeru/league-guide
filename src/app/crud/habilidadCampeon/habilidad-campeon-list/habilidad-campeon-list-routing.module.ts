import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadCampeonListPage } from './habilidad-campeon-list.page';

const routes: Routes = [
  {
    path: '',
    component: HabilidadCampeonListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadCampeonListPageRoutingModule {}
