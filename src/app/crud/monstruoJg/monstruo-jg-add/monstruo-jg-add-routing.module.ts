import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonstruoJgAddPage } from './monstruo-jg-add.page';

const routes: Routes = [
  {
    path: '',
    component: MonstruoJgAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonstruoJgAddPageRoutingModule {}
