import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmpleados } from './ver-empleados';

describe('VerEmpleados', () => {
  let component: VerEmpleados;
  let fixture: ComponentFixture<VerEmpleados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerEmpleados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEmpleados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
