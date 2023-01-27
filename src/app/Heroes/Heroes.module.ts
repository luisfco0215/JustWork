import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/app.heroe.componet';
import { ListadoComponent } from './heroe/Listado/listado.component';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    exports:[
        ListadoComponent,
        HeroeComponent
    ],

    imports:[
        CommonModule
    ]
})

export class HeroesModule {}