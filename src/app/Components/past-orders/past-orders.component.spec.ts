import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastOrdersComponent } from './past-orders.component';

describe('PastOrdersComponent', () => {
  let component: PastOrdersComponent;
  let fixture: ComponentFixture<PastOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
