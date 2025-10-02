import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBuscar } from './input-buscar';

describe('InputBuscar', () => {
  let component: InputBuscar;
  let fixture: ComponentFixture<InputBuscar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBuscar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBuscar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
