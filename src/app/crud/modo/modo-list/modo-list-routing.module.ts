import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoListPage } from './modo-list.page';

const routes: Routes = [
  {
    path: '',
    component: ModoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoListPageRoutingModule {}
