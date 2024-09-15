import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoCreditoFormComponent } from './cartao-credito-form.component';

describe('CartaoCreditoFormComponent', () => {
  let component: CartaoCreditoFormComponent;
  let fixture: ComponentFixture<CartaoCreditoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartaoCreditoFormComponent]
    });
    fixture = TestBed.createComponent(CartaoCreditoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
