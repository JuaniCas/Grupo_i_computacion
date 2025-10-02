import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpleadosPedidosComponent } from './empleados-pedidos.component';

describe('EmpleadosPedidosComponent', () => {
  let component: EmpleadosPedidosComponent;
  let fixture: ComponentFixture<EmpleadosPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosPedidosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpleadosPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
