import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonListPage } from './campeon-list.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonListPageRoutingModule {}
