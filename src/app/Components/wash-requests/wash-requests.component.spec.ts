import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashRequestsComponent } from './wash-requests.component';

describe('WashRequestsComponent', () => {
  let component: WashRequestsComponent;
  let fixture: ComponentFixture<WashRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
