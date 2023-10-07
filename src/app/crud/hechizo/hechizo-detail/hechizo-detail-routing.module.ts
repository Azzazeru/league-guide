import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HechizoDetailPage } from './hechizo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HechizoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HechizoDetailPageRoutingModule {}
