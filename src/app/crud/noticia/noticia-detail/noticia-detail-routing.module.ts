import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaDetailPage } from './noticia-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaDetailPageRoutingModule {}
