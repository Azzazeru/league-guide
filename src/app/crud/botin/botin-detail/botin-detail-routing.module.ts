import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotinDetailPage } from './botin-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BotinDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotinDetailPageRoutingModule {}
