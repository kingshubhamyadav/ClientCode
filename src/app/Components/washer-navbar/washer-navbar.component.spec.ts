import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherNavbarComponent } from './washer-navbar.component';

describe('WasherNavbarComponent', () => {
  let component: WasherNavbarComponent;
  let fixture: ComponentFixture<WasherNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasherNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
