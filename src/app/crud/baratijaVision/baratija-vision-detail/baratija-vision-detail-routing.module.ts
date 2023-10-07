import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaratijaVisionDetailPage } from './baratija-vision-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BaratijaVisionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaratijaVisionDetailPageRoutingModule {}
