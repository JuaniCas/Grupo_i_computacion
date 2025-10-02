import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalAdmin } from './pagina-principal-admin';

describe('PaginaPrincipalAdmin', () => {
  let component: PaginaPrincipalAdmin;
  let fixture: ComponentFixture<PaginaPrincipalAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPrincipalAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPrincipalAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
