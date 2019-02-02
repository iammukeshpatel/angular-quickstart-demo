import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroDetailService } from './hero-detail.service';
import { Hero } from '../../hero';

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroDetailService: HeroDetailService,
    private route: ActivatedRoute,
    private router: Router
  )
  {}

  ngOnInit(): void {
    // get hero when `id` param changes
    this.route.paramMap.subscribe(pmap => this.getHero(pmap.get("id")));
  }

  getHero(id: any) {
    this.heroDetailService.getHero(id).subscribe(hero => {
      if(hero) {
        this.hero = hero;
      } else {
        this.gotoList();
      }
      
    });
  }

  gotoList() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
