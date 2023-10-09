import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrakeAddPage } from './drake-add.page';

const routes: Routes = [
  {
    path: '',
    component: DrakeAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrakeAddPageRoutingModule {}
