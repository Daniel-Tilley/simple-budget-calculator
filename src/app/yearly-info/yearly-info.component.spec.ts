import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyInfoComponent } from './yearly-info.component';

describe('YearlyInfoComponent', () => {
  let component: YearlyInfoComponent;
  let fixture: ComponentFixture<YearlyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
