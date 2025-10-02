import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionClientes } from './validacion-clientes';

describe('ValidacionClientes', () => {
  let component: ValidacionClientes;
  let fixture: ComponentFixture<ValidacionClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacionClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacionClientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
