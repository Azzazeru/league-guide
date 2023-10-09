import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonstruoJgEditPage } from './monstruo-jg-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MonstruoJgEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonstruoJgEditPageRoutingModule {}
