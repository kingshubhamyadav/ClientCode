import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherProfileComponent } from './washer-profile.component';

describe('WasherProfileComponent', () => {
  let component: WasherProfileComponent;
  let fixture: ComponentFixture<WasherProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
