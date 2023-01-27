import {  Component } from '@angular/core';

@Component({
    selector: 'app-Contador',
    templateUrl: 'app.contador.component.html'
})

export class Contador{

    title: string = 'My Angular App';
    numero: number = 0;
    base: number = 125;

  Acumular(valor: number){
    this.numero += valor;
  }
  
}