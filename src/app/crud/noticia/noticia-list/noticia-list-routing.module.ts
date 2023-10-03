import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaListPage } from './noticia-list.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaListPageRoutingModule {}
