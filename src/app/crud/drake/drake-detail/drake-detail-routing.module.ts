import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrakeDetailPage } from './drake-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DrakeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrakeDetailPageRoutingModule {}
