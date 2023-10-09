import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoEditPage } from './modo-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ModoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoEditPageRoutingModule {}
