import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadCampeonAddPage } from './habilidad-campeon-add.page';

const routes: Routes = [
  {
    path: '',
    component: HabilidadCampeonAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadCampeonAddPageRoutingModule {}
