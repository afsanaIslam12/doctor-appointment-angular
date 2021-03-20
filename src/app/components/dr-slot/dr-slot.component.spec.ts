import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSlotComponent } from './dr-slot.component';

describe('DrSlotComponent', () => {
  let component: DrSlotComponent;
  let fixture: ComponentFixture<DrSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
