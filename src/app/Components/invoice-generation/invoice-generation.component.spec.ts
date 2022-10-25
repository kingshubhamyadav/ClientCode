import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceGenerationComponent } from './invoice-generation.component';

describe('InvoiceGenerationComponent', () => {
  let component: InvoiceGenerationComponent;
  let fixture: ComponentFixture<InvoiceGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
