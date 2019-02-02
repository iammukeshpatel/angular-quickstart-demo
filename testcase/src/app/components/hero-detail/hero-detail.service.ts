import { Injectable } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from "../../services/hero.service";

@Injectable({
  providedIn: "root"
})
export class HeroDetailService {
  constructor(private heroService: HeroService) {}

  getHero(id: number | string): any {
    if (typeof id === "string") {
      id = parseInt(id as string, 10);
    }
    
    return this.heroService.getHero(id);
  }

  // saveHero(hero: Hero) {
  //   // return this.heroService.updateHero(hero);
  // }
}
