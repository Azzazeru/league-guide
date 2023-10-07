import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotinListPage } from './botin-list.page';

const routes: Routes = [
  {
    path: '',
    component: BotinListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotinListPageRoutingModule {}
