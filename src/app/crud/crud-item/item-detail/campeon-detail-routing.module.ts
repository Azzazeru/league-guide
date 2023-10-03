import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonDetailPage } from './campeon-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonDetailPageRoutingModule {}
