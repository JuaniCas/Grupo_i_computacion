import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdmEmp } from './header-adm-emp';

describe('HeaderAdmEmp', () => {
  let component: HeaderAdmEmp;
  let fixture: ComponentFixture<HeaderAdmEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAdmEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAdmEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
