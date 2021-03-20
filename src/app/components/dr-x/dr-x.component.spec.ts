import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrXComponent } from './dr-x.component';

describe('DrXComponent', () => {
  let component: DrXComponent;
  let fixture: ComponentFixture<DrXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
