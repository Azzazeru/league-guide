import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaEditPage } from './noticia-edit.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaEditPageRoutingModule {}
