import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonEditPage } from './campeon-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonEditPageRoutingModule {}
