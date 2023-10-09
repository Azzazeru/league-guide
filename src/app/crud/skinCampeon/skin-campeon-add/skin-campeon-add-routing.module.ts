import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinCampeonAddPage } from './skin-campeon-add.page';

const routes: Routes = [
  {
    path: '',
    component: SkinCampeonAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinCampeonAddPageRoutingModule {}
