import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPrincipalEmpleadosComponent } from './pagina-principal-empleados.component';

describe('PaginaPrincipalEmpleadosComponent', () => {
  let component: PaginaPrincipalEmpleadosComponent;
  let fixture: ComponentFixture<PaginaPrincipalEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPrincipalEmpleadosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaPrincipalEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
