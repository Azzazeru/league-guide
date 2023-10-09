import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaAllPage } from './mapa-all.page';

const routes: Routes = [
  {
    path: '',
    component: MapaAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaAllPageRoutingModule {}
