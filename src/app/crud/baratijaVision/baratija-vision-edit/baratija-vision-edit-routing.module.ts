import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaratijaVisionEditPage } from './baratija-vision-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BaratijaVisionEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaratijaVisionEditPageRoutingModule {}
