import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoPedidosComponent } from './estado-pedidos.component';

describe('EstadoPedidosComponent', () => {
  let component: EstadoPedidosComponent;
  let fixture: ComponentFixture<EstadoPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoPedidosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EstadoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
