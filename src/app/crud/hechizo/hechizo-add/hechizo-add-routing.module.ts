import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HechizoAddPage } from './hechizo-add.page';

const routes: Routes = [
  {
    path: '',
    component: HechizoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HechizoAddPageRoutingModule {}
