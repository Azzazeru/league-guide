import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { CampeonEditPageRoutingModule } from './campeon-edit-routing.module';

import { CampeonEditPage } from './campeon-edit.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CampeonEditPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [CampeonEditPage]
})
export class CampeonEditPageModule { }
