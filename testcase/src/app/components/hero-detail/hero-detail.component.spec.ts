import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HeroDetailService } from './hero-detail.service';
import { Hero } from '../../hero';
import { ActivatedRouteStub, ActivatedRoute, RouterStub } from '../../../testing/activated-route-stub';
import { of } from 'rxjs';


////// Testing Vars //////
let HEROES = [
  { id: 1, name: "Mukesh" },
  { id: 2, name: "Ankita" },
  { id: 3, name: "Mahesh" },
  { id: 4, name: "Paresh" }
];
const firstHero = HEROES[0];

let activatedRoute: ActivatedRouteStub;
let component: HeroDetailComponent;
let fixture: ComponentFixture<HeroDetailComponent>;
let page: Page;
let mockHeroDetailService: HeroDetailService;

activatedRoute = new ActivatedRouteStub();

/* 
describe("HeroDetailComponent", () => {
  let expectedHero: Hero;
  let mockHeroDetailService: HeroDetailService;
  let HEROES = [
    { id: 1, name: "Mukesh" },
    { id: 2, name: "Ankita" },
    { id: 3, name: "Mahesh" },
    { id: 4, name: "Paresh" }
  ];

  beforeEach(async(() => {
    let firstHero = HEROES[0];
    expectedHero = firstHero;
    mockHeroDetailService = jasmine.createSpyObj(["getHero"]);

    ActivatedRouteStub.setParamMap({ id: expectedHero.id });

    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: HeroDetailService, useValue: mockHeroDetailService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
}); */

class Page {
  // getter properties wait to query the DOM until called.
  get buttons() {
    return this.queryAll<HTMLButtonElement>("button");
  }
  get saveBtn() {
    return this.buttons[0];
  }
  get cancelBtn() {
    return this.buttons[1];
  }
  get nameDisplay() {
    return this.query<HTMLElement>("span");
  }
  get nameInput() {
    return this.query<HTMLInputElement>("input");
  }

  gotoListSpy: jasmine.Spy;
  navigateSpy: jasmine.Spy;

  constructor(fixture: ComponentFixture<HeroDetailComponent>) {
    // get the navigate spy from the injected router spy object
    const routerSpy = <any>fixture.debugElement.injector.get(Router);
    
    // this.navigateSpy = routerSpy.navigate;
    this.navigateSpy = spyOn(routerSpy, "navigate");

    // spy on component's `gotoList()` method
    const component = fixture.componentInstance;
    this.gotoListSpy = spyOn(component, 'gotoList').and.callThrough();
  }

  //// query helpers ////
  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }
}

/** Create the HeroDetailComponent, initialize it, set test variables  */
function createComponent() {
  fixture = TestBed.createComponent(HeroDetailComponent);
  component = fixture.componentInstance;
  page = new Page(fixture);

  // 1st change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    // 2nd change detection displays the async-fetched hero
    fixture.detectChanges();
  });
}

describe("when navigate to existing hero", () => {
  let expectedHero: Hero;

  beforeEach(async(() => {

    const mockHeroDetailService = jasmine.createSpyObj("HeroService", [
      "getHeroes",
      "getHero"
    ]);

    mockHeroDetailService.getHero.and.callFake(id => {
      return of(HEROES[id - 1]);
    });

    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useClass: RouterStub },
        { provide: HeroDetailService, useValue: mockHeroDetailService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    expectedHero = firstHero;
    activatedRoute.setParamMap({ id: expectedHero.id });
    
    createComponent();
  }));

  /* it("should display that hero's name", () => {
    expect(page.nameDisplay.textContent).toBe(expectedHero.name);
  }); */

  it("should try to navigate back to hero list", () => {
    expect(page.gotoListSpy.calls.any()).toBe(true, "comp.gotoList called");
    expect(page.navigateSpy.calls.any()).toBe(true, "router.navigate called");
  });

});

describe("Hero Service when navigate with no hero id", () => {
  beforeEach(async(() => {

    const mockHeroDetailService = jasmine.createSpyObj('"HeroService', [
      "getHeroes",
      "getHero"
    ]);

    mockHeroDetailService.getHero.and.callFake(id => {
      return of(HEROES[id - 1]);
    });

    activatedRoute.setParamMap({ id: 0});

    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useClass: RouterStub },
        { provide: HeroDetailService, useValue: mockHeroDetailService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async(createComponent));

  /* 
  it("should have hero.id === 0", () => {
    console.log("herooo", component);  
    expect(component.hero.id).toBe(1);
  }); */
  
});