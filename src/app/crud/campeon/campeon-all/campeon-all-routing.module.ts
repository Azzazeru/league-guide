import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonAllPage } from './campeon-all.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonAllPageRoutingModule {}
