import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoAddPage } from './modo-add.page';

const routes: Routes = [
  {
    path: '',
    component: ModoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoAddPageRoutingModule {}
