import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonAddPageRoutingModule } from './campeon-add-routing.module';

import { CampeonAddPage } from './campeon-add.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CampeonAddPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [CampeonAddPage]
})
export class CampeonAddPageModule { }
