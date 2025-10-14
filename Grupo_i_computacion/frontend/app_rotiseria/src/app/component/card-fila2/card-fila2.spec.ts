import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card_Fila2 } from './card-fila2';

describe('CardFila2', () => {
  let component: Card_Fila2;
  let fixture: ComponentFixture<Card_Fila2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card_Fila2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card_Fila2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
