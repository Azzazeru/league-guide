import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonAddPage } from './campeon-add.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonAddPageRoutingModule {}
