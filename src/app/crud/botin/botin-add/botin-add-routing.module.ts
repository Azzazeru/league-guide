import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotinAddPage } from './botin-add.page';

const routes: Routes = [
  {
    path: '',
    component: BotinAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotinAddPageRoutingModule {}
