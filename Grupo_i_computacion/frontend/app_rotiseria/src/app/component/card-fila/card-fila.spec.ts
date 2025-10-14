import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFila } from './card-fila';

describe('CardFila', () => {
  let component: CardFila;
  let fixture: ComponentFixture<CardFila>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFila]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFila);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
