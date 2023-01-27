import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})


export class ListadoComponent {
  newHeroes: string[] = [];
  heroeBorrado: string = ''; 
  counter: number = 0;
  heroes: string[] = [
    'Spider-Man', 
    'Iron-Man', 
    'Hulk', 
    'Thor',
    'Capitan America'
  ]

  Remove(): void{
    const listado = this.heroes.pop();

    if(listado != undefined)
      this.newHeroes.push(listado);
  }

  Reverse(): void{
    const listado = this.newHeroes.pop();

    if(listado != undefined)
      this.heroes.push(listado);
  }

  ChangeHeroe(){
    this.heroeBorrado = this.heroes[this.counter++];

    if(this.counter == this.heroes.length -1){
      this.counter = 0
    }
  }
}
