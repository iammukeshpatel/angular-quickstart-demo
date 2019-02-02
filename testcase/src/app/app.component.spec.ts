import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA, Component, Directive, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({ selector: "app-banner", template: "" })
class BannerStubComponent {}

@Component({ selector: "router-outlet", template: "" })
class RouterOutletStubComponent {}

@Component({ selector: "app-welcome", template: "" })
class WelcomeStubComponent {}

@Directive({
  selector: "[routerLink]",
  host: { "(click)": "onClick()" }
})
export class RouterLinkDirectiveStub {
  @Input("routerLink")
  linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

let linkDes, routerLinks;

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        RouterLinkDirectiveStub,
        BannerStubComponent,
        RouterOutletStubComponent,
        WelcomeStubComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de =>
      de.injector.get(RouterLinkDirectiveStub)
    );
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'angular-quick-start'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-quick-start');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-quick-start!');
  }));


  it("can get RouterLinks from template", () => {
    console.log(routerLinks);
    console.log(routerLinks[0]);
    expect(routerLinks.length).toBe(3, "should have 3 routerLinks");
    expect(routerLinks[0].linkParams).toBe("/dashboard");
    expect(routerLinks[1].linkParams).toBe("/heroes");
    expect(routerLinks[2].linkParams).toBe("/about");
  });
/*
  it("can click Heroes link in template", () => {
    const heroesLinkDe = linkDes[1]; // heroes link DebugElement
    const heroesLink = routerLinks[1]; // heroes link directive

    expect(heroesLink.navigatedTo).toBeNull("should not have navigated yet");

    heroesLinkDe.triggerEventHandler("click", null);
    fixture.detectChanges();

    expect(heroesLink.navigatedTo).toBe("/heroes");
  });
*/
});
