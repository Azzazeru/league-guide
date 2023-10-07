import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoAllPage } from './modo-all.page';

const routes: Routes = [
  {
    path: '',
    component: ModoAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoAllPageRoutingModule {}
