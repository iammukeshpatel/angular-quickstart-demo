import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  beforeEach(async(() => {  
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector("h1");
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "banner works!"', () => {
    
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerElement: HTMLElement = bannerDe.nativeElement;
    // expect(bannerElement.textContent).toContain("banner works!");
    const p = bannerElement.querySelector("p");
    expect(p.textContent).toEqual("banner works!");
  });

  it('should contain "banner works!" using by css', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css("p"));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual("banner works!");
  });

  it("should display original title", () => {
    expect(h1.textContent).toContain(component.title);
  });

  it("should still see original title after comp.title change", () => {
    const oldTitle = component.title;
    component.title = "Test Title";
    // Displayed title is old because Angular didn't hear the change :(
    expect(h1.textContent).toContain(oldTitle);
  });

  it("should display updated title after detectChanges", () => {
    component.title = "Test Title";
    fixture.detectChanges(); // detect changes explicitly
    expect(h1.textContent).toContain(component.title);
  });
  
});
