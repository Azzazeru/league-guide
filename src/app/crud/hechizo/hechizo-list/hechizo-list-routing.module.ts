import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HechizoListPage } from './hechizo-list.page';

const routes: Routes = [
  {
    path: '',
    component: HechizoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HechizoListPageRoutingModule {}
