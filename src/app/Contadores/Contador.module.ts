import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { Contador } from "./Contador/app.contador.component";

@NgModule({
    declarations: [
        Contador,
    ],

    exports: [
        Contador
    ],

    imports:[
        CommonModule
    ]
})

export class ContadorModule{}