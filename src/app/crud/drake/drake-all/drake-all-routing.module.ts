import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrakeAllPage } from './drake-all.page';

const routes: Routes = [
  {
    path: '',
    component: DrakeAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrakeAllPageRoutingModule {}
