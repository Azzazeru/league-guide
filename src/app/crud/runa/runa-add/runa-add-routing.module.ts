import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunaAddPage } from './runa-add.page';

const routes: Routes = [
  {
    path: '',
    component: RunaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunaAddPageRoutingModule {}
