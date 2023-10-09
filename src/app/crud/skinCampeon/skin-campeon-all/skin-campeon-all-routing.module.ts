import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinCampeonAllPage } from './skin-campeon-all.page';

const routes: Routes = [
  {
    path: '',
    component: SkinCampeonAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinCampeonAllPageRoutingModule {}
