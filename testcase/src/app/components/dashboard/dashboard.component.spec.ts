import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { BrowserModule, By } from "@angular/platform-browser";
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { DashboardComponent } from './dashboard.component';
import { DashboardHeroComponent } from '../dashboard-hero/dashboard-hero.component';

import { HeroService } from '../../services/hero.service';
import { HeroDetailService } from '../hero-detail/hero-detail.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Router } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardDe: DebugElement;
  let dashboardEl: HTMLElement;
  let HEROES;
  let routerSpy, heroServiceSpy, heroDetailServiceSpy;

  HEROES = [
      {"id": 1, "name": "Mukesh"},
      {"id": 2, "name": "Ankita"},
      {"id": 3, "name": "Mahesh"},
      {"id": 4, "name": "Paresh"}
    ];
  
  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
    heroServiceSpy = jasmine.createSpyObj("HeroService", [
      "getHeroes",
      "getHero"
    ]);

    heroDetailServiceSpy = jasmine.createSpyObj("HeroDetailService", [
      "getHero"
    ]);

    heroServiceSpy.getHeroes.and.returnValue(of(HEROES));
    heroDetailServiceSpy.getHero.and.callFake((id) =>{
      return of(HEROES[id]);
    });


    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        DashboardHeroComponent,
        HeroDetailComponent
      ],
      imports: [
        BrowserModule,
      ],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy },
        { provide: HeroDetailService, useValue: heroDetailServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    
    dashboardDe = fixture.debugElement;
    dashboardEl = dashboardDe.nativeElement.querySelector('.dashboard');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should tell ROUTER to navigate when hero clicked', () => {
    heroClick(); // trigger click on first inner <div class="hero">

    // args passed to router.navigateByUrl() spy
    const spy = routerSpy.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];


    // expecting to navigate to id of the component's first hero
    const id = component.heroes[0].id;
    expect(navArgs).toBe('/heroes/' + id,
      'should nav to HeroDetail for first hero');
  });

  function heroClick() {
    const heroDe = fixture.debugElement.query(By.css("app-dashboard-hero"));
    heroDe.triggerEventHandler("selected", component.heroes[0]);
  };

});


