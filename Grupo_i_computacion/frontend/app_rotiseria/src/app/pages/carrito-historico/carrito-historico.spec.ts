import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoHistorico } from './carrito-historico';

describe('CarritoHistorico', () => {
  let component: CarritoHistorico;
  let fixture: ComponentFixture<CarritoHistorico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoHistorico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoHistorico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
