import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'app.heroe.component.html'
})

export class HeroeComponent{
    nombre: string = "";
    edad: number = 45;
    counter: number = 0;
    heroes: string[] = [
        'Spider-Man', 
        'Iron-Man', 
        'Hulk', 
        'Thor',
        'Capitan America'
      ]

    get GetHeroeName(): string{
        return this.nombre.toUpperCase()
    }

    GetName(): string{
        return `${this.nombre} - ${this.edad}`
    }

    CambiarEdad(varlor: number): number{
        return this.edad += varlor;
    }

    ChangeHeroe(){
        this.nombre = this.heroes[this.counter++];
    
        if(this.counter == this.heroes.length -1)
          this.counter = 0
        
      }
}