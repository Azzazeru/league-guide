import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaratijaVisionListPage } from './baratija-vision-list.page';

const routes: Routes = [
  {
    path: '',
    component: BaratijaVisionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaratijaVisionListPageRoutingModule {}
