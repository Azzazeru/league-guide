import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonstruoJgAllPage } from './monstruo-jg-all.page';

const routes: Routes = [
  {
    path: '',
    component: MonstruoJgAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonstruoJgAllPageRoutingModule {}
