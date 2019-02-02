import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../hero';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  readonly heroesUrl = "assets/data/heroes.json"; // URL to web api

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number | string): any {
    if (typeof id === "string") {
      id = parseInt(id as string, 10);
    }

    return this.getHeroes().pipe(
      map(heroes => heroes.find(hero => hero.id == id))
    );
  }

  // updateHero(hero: Hero): Promise<Hero> {
  //   return this.getHero(hero.id).then(h => {
  //     if (!h) {
  //       throw new Error(`Hero ${hero.id} not found`);
  //     }
  //     return Object.assign(h, hero);
  //   });
  // }
}
