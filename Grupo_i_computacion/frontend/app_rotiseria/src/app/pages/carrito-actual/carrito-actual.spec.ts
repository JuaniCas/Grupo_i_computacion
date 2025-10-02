import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoActual } from './carrito-actual';

describe('CarritoActual', () => {
  let component: CarritoActual;
  let fixture: ComponentFixture<CarritoActual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoActual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoActual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
