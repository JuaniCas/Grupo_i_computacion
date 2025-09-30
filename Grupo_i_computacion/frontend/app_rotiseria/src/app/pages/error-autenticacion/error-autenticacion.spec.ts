import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAutenticacion } from './error-autenticacion';

describe('ErrorAutenticacion', () => {
  let component: ErrorAutenticacion;
  let fixture: ComponentFixture<ErrorAutenticacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorAutenticacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorAutenticacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
