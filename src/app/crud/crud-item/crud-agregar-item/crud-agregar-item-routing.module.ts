import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAddPage } from './crud-agregar-item.page';

const routes: Routes = [
  {
    path: '',
    component: ProductAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteAgregarPageRoutingModule {}