import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersBaoardComponent } from './leaders-baoard.component';

describe('LeadersBaoardComponent', () => {
  let component: LeadersBaoardComponent;
  let fixture: ComponentFixture<LeadersBaoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadersBaoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersBaoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
