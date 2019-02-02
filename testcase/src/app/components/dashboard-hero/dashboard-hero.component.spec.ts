import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroComponent } from './dashboard-hero.component';
import { Hero } from '../../hero';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { click } from '../../../testing';

describe('DashboardHeroComponent', () => {
  let component: DashboardHeroComponent;
  let fixture: ComponentFixture<DashboardHeroComponent>;
  let heroDe: DebugElement;
  let heroEl: HTMLElement;
  const expectedHero: Hero = { id: 42, name: 'Test Name' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroComponent);
    component = fixture.componentInstance;
    const hero: Hero = expectedHero;
component.hero = hero;

    heroDe = fixture.debugElement.query(By.css('.hero'));
    heroEl = heroDe.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected event when clicked ', () => {
    const hero: Hero = { id: 42, name: 'Test' };
    component.hero = hero;

    component.selected.subscribe(selectedHero =>
      expect(selectedHero).toBe(hero)
    );
    component.click();
  });

  it('should raise selected event when clicked (click helper)', () => {
    let selectedHero: Hero;

    component.hero = expectedHero;
    fixture.detectChanges();
    component.selected.subscribe(hero => selectedHero = hero);

    click(heroDe); // click helper with DebugElement
    click(heroEl); // click helper with native element

    expect(selectedHero).toBe(expectedHero);
  });

  it('should raise selected event when clicked (element.click)', () => {
    let selectedHero: Hero;
    component.selected.subscribe((hero: Hero) => selectedHero = hero);

    heroEl.click();
    fixture.detectChanges();
    expect(selectedHero).toBe(expectedHero);
  });

});
