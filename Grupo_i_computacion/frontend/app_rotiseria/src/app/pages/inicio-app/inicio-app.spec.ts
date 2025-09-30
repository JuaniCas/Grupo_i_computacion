import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioApp } from './inicio-app';

describe('InicioApp', () => {
  let component: InicioApp;
  let fixture: ComponentFixture<InicioApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
