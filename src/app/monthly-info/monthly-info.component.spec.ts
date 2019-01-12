import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyInfoComponent } from './monthly-info.component';

describe('MonthlyInfoComponent', () => {
  let component: MonthlyInfoComponent;
  let fixture: ComponentFixture<MonthlyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
