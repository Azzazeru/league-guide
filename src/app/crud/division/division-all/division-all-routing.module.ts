import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionAllPage } from './division-all.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionAllPageRoutingModule {}
