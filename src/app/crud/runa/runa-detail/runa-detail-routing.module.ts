import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunaDetailPage } from './runa-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RunaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunaDetailPageRoutingModule {}
