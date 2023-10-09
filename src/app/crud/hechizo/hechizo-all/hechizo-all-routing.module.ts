import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HechizoAllPage } from './hechizo-all.page';

const routes: Routes = [
  {
    path: '',
    component: HechizoAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HechizoAllPageRoutingModule {}
