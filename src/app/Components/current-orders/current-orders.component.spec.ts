import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrdersComponent } from './current-orders.component';

describe('CurrentOrdersComponent', () => {
  let component: CurrentOrdersComponent;
  let fixture: ComponentFixture<CurrentOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
