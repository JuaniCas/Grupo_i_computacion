import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidarCuentasComponent } from './validar-cuentas.component';

describe('ValidarCuentasComponent', () => {
  let component: ValidarCuentasComponent;
  let fixture: ComponentFixture<ValidarCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarCuentasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidarCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
