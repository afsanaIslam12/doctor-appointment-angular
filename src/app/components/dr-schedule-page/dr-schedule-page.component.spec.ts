import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSchedulePageComponent } from './dr-schedule-page.component';

describe('DrSchedulePageComponent', () => {
  let component: DrSchedulePageComponent;
  let fixture: ComponentFixture<DrSchedulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrSchedulePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
