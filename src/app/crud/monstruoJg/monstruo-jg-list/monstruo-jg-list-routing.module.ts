import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonstruoJgListPage } from './monstruo-jg-list.page';

const routes: Routes = [
  {
    path: '',
    component: MonstruoJgListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonstruoJgListPageRoutingModule {}
