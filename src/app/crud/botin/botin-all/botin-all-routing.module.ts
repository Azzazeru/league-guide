import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotinAllPage } from './botin-all.page';

const routes: Routes = [
  {
    path: '',
    component: BotinAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotinAllPageRoutingModule {}
