import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscenciaEditPage } from './escencia-edit.page';

const routes: Routes = [
  {
    path: '',
    component: EscenciaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscenciaEditPageRoutingModule {}
