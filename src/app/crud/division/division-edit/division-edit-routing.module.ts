import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionEditPage } from './division-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionEditPageRoutingModule {}
