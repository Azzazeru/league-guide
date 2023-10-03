import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaDetailPage } from './mapa-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MapaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaDetailPageRoutingModule {}
