import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPedidos } from './abm-pedidos';

describe('AbmPedidos', () => {
  let component: AbmPedidos;
  let fixture: ComponentFixture<AbmPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbmPedidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmPedidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
