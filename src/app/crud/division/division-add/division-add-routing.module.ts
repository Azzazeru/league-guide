import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionAddPage } from './division-add.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionAddPageRoutingModule {}
