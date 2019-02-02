import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchCompComponent } from './lightswitch-comp.component';

describe('LightswitchCompComponent', () => {
  let component: LightswitchCompComponent;
  let fixture: ComponentFixture<LightswitchCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightswitchCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.isOn).toBe(false, 'Off at first');
    component.clicked();

    expect(component.isOn).toBe(true, 'On After Click');
    component.clicked();


    expect(component.isOn).toBe(false, 'Off After second Click');

  });

  it('#clicked() should set #message to "is on"', () => {
    expect(component.message).toMatch(/is off/i, 'off at first');
    component.clicked();

    expect(component.message).toMatch(/is on/i, 'on after clicked');
  });
});
