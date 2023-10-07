import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadCampeonEditPage } from './habilidad-campeon-edit.page';

const routes: Routes = [
  {
    path: '',
    component: HabilidadCampeonEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadCampeonEditPageRoutingModule {}
