import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrMComponent } from './dr-m.component';

describe('DrMComponent', () => {
  let component: DrMComponent;
  let fixture: ComponentFixture<DrMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
