import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        // Components
        ContadorComponent
    ],
    exports: [
        // Components
        ContadorComponent
    ],
    imports: [
        // Modules
        CommonModule
    ]
})
export class ContadorModule { }