import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunaAllPage } from './runa-all.page';

const routes: Routes = [
  {
    path: '',
    component: RunaAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunaAllPageRoutingModule {}
