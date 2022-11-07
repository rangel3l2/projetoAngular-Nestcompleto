import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero';

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

  constructor(private http: HttpClient) {}

  getHeroes(): Hero[] {
    return this.HEROES;
  }

  getHero(id: number): Hero {
    return this.HEROES[id];
  }
  //--------------------------------------------
  addHero(hero: Hero): Observable<Hero[]> {
    // this.maxId();
    this.HEROES.push(hero);
    console.log('adding hero..');
    // console.log(hero.name);
    return of(this.HEROES);
  }
  //--------------------------------------------
  removeHero(hero: Hero): Observable<Hero[]> {
    let heros = this.HEROES.filter((h) => hero.name !== h.name);
    return of(heros); // of -> convert array to observable
  }
  //--------------------------------------------
  maxId(): number {
    const ids = this.HEROES.map((hero) => hero.id) as number[];
    return Math.max(...ids);
  }
}
