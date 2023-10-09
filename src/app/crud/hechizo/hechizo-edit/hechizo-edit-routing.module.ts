import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HechizoEditPage } from './hechizo-edit.page';

const routes: Routes = [
  {
    path: '',
    component: HechizoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HechizoEditPageRoutingModule {}
