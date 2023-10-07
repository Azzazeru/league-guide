import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkinCampeonEditPage } from './skin-campeon-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SkinCampeonEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkinCampeonEditPageRoutingModule {}
