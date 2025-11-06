import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPedidos } from './ver-pedidos';

describe('VerPedidos', () => {
  let component: VerPedidos;
  let fixture: ComponentFixture<VerPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerPedidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPedidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
