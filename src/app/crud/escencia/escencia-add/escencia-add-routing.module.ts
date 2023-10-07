import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscenciaAddPage } from './escencia-add.page';

const routes: Routes = [
  {
    path: '',
    component: EscenciaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscenciaAddPageRoutingModule {}
