import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../../services/user.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userService;
  let userServiceStub: Partial<UserService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [
        { provide: UserService, useClass: MockUserService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;

    // services
    // userService = TestBed.get(UserService);
    userService = fixture.debugElement.injector.get(UserService);

    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should not have welcome message after construction", () => {
    expect(component.welcome).toBeUndefined();
  });

  it("should welcome logged in user after Angular calls ngOnInit", () => {
    component.ngOnInit();
    expect(component.welcome).toContain(userService.user.name);
  });

  it("should ask user to log in if not logged in after ngOnInit", () => {
    userService.isLoggedIn = false;
    component.ngOnInit();
    expect(component.welcome).not.toContain(userService.user.name);
    expect(component.welcome).toContain("log in");
  });


});

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User'};
};
