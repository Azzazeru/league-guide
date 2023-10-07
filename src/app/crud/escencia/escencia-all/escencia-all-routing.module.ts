import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscenciaAllPage } from './escencia-all.page';

const routes: Routes = [
  {
    path: '',
    component: EscenciaAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscenciaAllPageRoutingModule {}
