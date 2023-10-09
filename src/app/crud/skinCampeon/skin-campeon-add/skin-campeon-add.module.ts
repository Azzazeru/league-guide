import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkinCampeonAddPageRoutingModule } from './skin-campeon-add-routing.module';

import { SkinCampeonAddPage } from './skin-campeon-add.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SkinCampeonAddPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [SkinCampeonAddPage]
})
export class SkinCampeonAddPageModule { }
