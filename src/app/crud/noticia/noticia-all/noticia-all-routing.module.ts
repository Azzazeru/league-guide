import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaAllPage } from './noticia-all.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaAllPageRoutingModule {}
