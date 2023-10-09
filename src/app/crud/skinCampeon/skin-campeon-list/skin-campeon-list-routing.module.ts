import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinCampeonListPage } from './skin-campeon-list.page';

const routes: Routes = [
  {
    path: '',
    component: SkinCampeonListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinCampeonListPageRoutingModule {}
