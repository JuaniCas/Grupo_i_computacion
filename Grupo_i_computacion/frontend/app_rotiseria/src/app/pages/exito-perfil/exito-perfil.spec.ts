import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitoPerfil } from './exito-perfil';

describe('ExitoPerfil', () => {
  let component: ExitoPerfil;
  let fixture: ComponentFixture<ExitoPerfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitoPerfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitoPerfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
