import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunaListPage } from './runa-list.page';

const routes: Routes = [
  {
    path: '',
    component: RunaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunaListPageRoutingModule {}
