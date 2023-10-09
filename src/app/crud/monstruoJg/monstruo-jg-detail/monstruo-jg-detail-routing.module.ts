import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonstruoJgDetailPage } from './monstruo-jg-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MonstruoJgDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonstruoJgDetailPageRoutingModule {}
