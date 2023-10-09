import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadCampeonAllPage } from './habilidad-campeon-all.page';

const routes: Routes = [
  {
    path: '',
    component: HabilidadCampeonAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadCampeonAllPageRoutingModule {}
