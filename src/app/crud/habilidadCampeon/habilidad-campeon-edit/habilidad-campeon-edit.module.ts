import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadCampeonEditPageRoutingModule } from './habilidad-campeon-edit-routing.module';

import { HabilidadCampeonEditPage } from './habilidad-campeon-edit.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HabilidadCampeonEditPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [HabilidadCampeonEditPage]
})
export class HabilidadCampeonEditPageModule { }
