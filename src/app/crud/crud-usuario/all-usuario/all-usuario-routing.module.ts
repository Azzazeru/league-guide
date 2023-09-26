import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllUsuarioPage } from './all-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: AllUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllUsuarioPageRoutingModule {}
