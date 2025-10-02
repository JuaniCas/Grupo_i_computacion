import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLabelCorreoContrasena } from './form-label-correo-contrasena';

describe('FormLabelCorreoContrasena', () => {
  let component: FormLabelCorreoContrasena;
  let fixture: ComponentFixture<FormLabelCorreoContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLabelCorreoContrasena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLabelCorreoContrasena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
