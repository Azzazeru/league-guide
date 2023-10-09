import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD:src/app/crud/crud-mapa/crud-modificar-mapa/crud-modificar-mapa-routing.module.ts
import { ClienteActualizarPage } from './crud-modificar-mapa.page';
=======
import { BaratijaVisionAddPage } from './baratija-vision-add.page';
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-add/baratija-vision-add-routing.module.ts

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-modificar-mapa/crud-modificar-mapa-routing.module.ts
    component: ClienteActualizarPage
=======
    component: BaratijaVisionAddPage
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-add/baratija-vision-add-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD:src/app/crud/crud-mapa/crud-modificar-mapa/crud-modificar-mapa-routing.module.ts
export class ClienteActualizarPageRoutingModule {}
=======
export class BaratijaVisionAddPageRoutingModule {}
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/baratija-vision-add/baratija-vision-add-routing.module.ts
