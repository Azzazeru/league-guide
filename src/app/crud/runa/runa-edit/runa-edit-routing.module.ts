import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RunaEditPage } from './runa-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RunaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RunaEditPageRoutingModule {}
