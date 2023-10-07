import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoDetailPage } from './modo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ModoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoDetailPageRoutingModule {}
