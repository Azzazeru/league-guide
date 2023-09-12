import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerPageRoutingModule } from './crud-leer-noticia-routing.module';

import { ClienteLeerPage } from './crud-leer-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerPageRoutingModule
  ],
  declarations: [ClienteLeerPage]
})
export class CrudLeerNoticiaPageModule {}