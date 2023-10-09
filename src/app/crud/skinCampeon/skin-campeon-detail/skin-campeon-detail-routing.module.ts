import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinCampeonDetailPage } from './skin-campeon-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SkinCampeonDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinCampeonDetailPageRoutingModule {}
