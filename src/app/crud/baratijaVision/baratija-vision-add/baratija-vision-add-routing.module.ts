import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaratijaVisionAddPage } from './baratija-vision-add.page';

const routes: Routes = [
  {
    path: '',
    component: BaratijaVisionAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaratijaVisionAddPageRoutingModule {}
