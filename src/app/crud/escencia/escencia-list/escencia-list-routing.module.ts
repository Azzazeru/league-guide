import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscenciaListPage } from './escencia-list.page';

const routes: Routes = [
  {
    path: '',
    component: EscenciaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscenciaListPageRoutingModule {}
