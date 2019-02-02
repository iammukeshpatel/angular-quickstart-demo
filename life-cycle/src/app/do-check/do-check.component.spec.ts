import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckComponentComponent } from './do-check-component';

describe('DoCheckComponentComponent', () => {
  let component: DoCheckComponentComponent;
  let fixture: ComponentFixture<DoCheckComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
