import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllUsuarioPageRoutingModule } from './all-usuario-routing.module';

import { AllUsuarioPage } from './all-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllUsuarioPageRoutingModule
  ],
  declarations: [AllUsuarioPage]
})
export class AllUsuarioPageModule {}
