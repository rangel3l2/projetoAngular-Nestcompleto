import { Injectable } from '@angular/core';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  HEROES: Hero[] = [
    { id: 1, name: 'Thor' },
    { id: 2, name: 'Homem de Ferro' },
    { id: 3, name: 'Homem de Aranha' },
    { id: 4, name: 'Capitão America' },
    { id: 5, name: 'Bob Esponja' },
    { id: 6, name: 'Mulher Maravilha' },
    { id: 7, name: 'Viúva Negra' },
  ];

  constructor() {}

  getHeroes(): Hero[] {
    return this.HEROES;
  }
  //--------------------------------------------
  addHero(hero: Hero): void {
    this.HEROES.push(hero);
    console.log('adding hero..');
    console.log(hero.name);
  }
  //--------------------------------------------
  removeHero(hero: Hero): void {}
  //--------------------------------------------
}
