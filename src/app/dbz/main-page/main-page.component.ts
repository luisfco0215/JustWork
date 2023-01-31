import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent {
  personajesDbz: Personaje[] = [{
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre: 'Vegeta',
    poder: 13000
  }
];
  nuevo: Personaje = {
    nombre: '',
    poder: 0,

  }

  Agregar(){
    this.personajesDbz.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
