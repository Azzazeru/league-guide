import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemAllPage } from './item-all.page';

const routes: Routes = [
  {
    path: '',
    component: ItemAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemAllPageRoutingModule {}
