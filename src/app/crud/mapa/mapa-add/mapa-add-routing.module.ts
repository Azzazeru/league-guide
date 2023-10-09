import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaAddPage } from './mapa-add.page';

const routes: Routes = [
  {
    path: '',
    component: MapaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaAddPageRoutingModule {}
