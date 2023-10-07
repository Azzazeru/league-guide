import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscenciaDetailPage } from './escencia-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EscenciaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscenciaDetailPageRoutingModule {}
