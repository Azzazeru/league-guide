import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<<< HEAD:src/app/crud/baratijaVision/baratija-vision-all/baratija-vision-all-routing.module.ts
import { BaratijaVisionAllPage } from './baratija-vision-all.page';
========
import { BaratijaVisionAddPage } from './baratija-vision-add.page';
>>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-add/baratija-vision-add-routing.module.ts

const routes: Routes = [
  {
    path: '',
<<<<<<<< HEAD:src/app/crud/baratijaVision/baratija-vision-all/baratija-vision-all-routing.module.ts
    component: BaratijaVisionAllPage
========
    component: BaratijaVisionAddPage
>>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-add/baratija-vision-add-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<<< HEAD:src/app/crud/baratijaVision/baratija-vision-all/baratija-vision-all-routing.module.ts
export class BaratijaVisionAllPageRoutingModule {}
========
export class BaratijaVisionAddPageRoutingModule {}
>>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-add/baratija-vision-add-routing.module.ts
