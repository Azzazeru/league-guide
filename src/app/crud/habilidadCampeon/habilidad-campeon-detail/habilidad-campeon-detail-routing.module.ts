import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadCampeonDetailPage } from './habilidad-campeon-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HabilidadCampeonDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadCampeonDetailPageRoutingModule {}
