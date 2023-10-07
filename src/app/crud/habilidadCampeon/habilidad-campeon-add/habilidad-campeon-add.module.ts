import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadCampeonAddPageRoutingModule } from './habilidad-campeon-add-routing.module';

import { HabilidadCampeonAddPage } from './habilidad-campeon-add.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HabilidadCampeonAddPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [HabilidadCampeonAddPage]
})
export class HabilidadCampeonAddPageModule { }
