import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../hero';


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router, 
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data
      console.log(this.heroes);
    });
  }

  gotoDetail(hero: Hero) {
    console.log(hero);
    let url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
  }
}
