import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [
    { id: 1, name: 'Thor' },
    { id: 2, name: 'Homem de Ferro' },
    { id: 3, name: 'Homem de Aranha' },
    { id: 4, name: 'Capitão America' },
    { id: 5, name: 'Bob' },
    { id: 6, name: 'Mulher Maravilha' },
    { id: 7, name: 'Viúva Negra' },
  ]; // undefined

  constructor() {}

  ngOnInit(): void {}

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
