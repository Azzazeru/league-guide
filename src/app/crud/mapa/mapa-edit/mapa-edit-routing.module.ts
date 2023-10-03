import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaEditPage } from './mapa-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MapaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaEditPageRoutingModule {}
