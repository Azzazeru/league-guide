import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaListPage } from './mapa-list.page';

const routes: Routes = [
  {
    path: '',
    component: MapaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaListPageRoutingModule {}
