import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<<< HEAD:src/app/crud/skinCampeon/skin-campeon-detail/skin-campeon-detail-routing.module.ts
import { SkinCampeonDetailPage } from './skin-campeon-detail.page';
========
import { BaratijaVisionAllPage } from './baratija-vision-all.page';
>>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-all/baratija-vision-all-routing.module.ts

const routes: Routes = [
  {
    path: '',
<<<<<<<< HEAD:src/app/crud/skinCampeon/skin-campeon-detail/skin-campeon-detail-routing.module.ts
    component: SkinCampeonDetailPage
========
    component: BaratijaVisionAllPage
>>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-all/baratija-vision-all-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<<< HEAD:src/app/crud/skinCampeon/skin-campeon-detail/skin-campeon-detail-routing.module.ts
export class SkinCampeonDetailPageRoutingModule {}
========
export class BaratijaVisionAllPageRoutingModule {}
>>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-all/baratija-vision-all-routing.module.ts
