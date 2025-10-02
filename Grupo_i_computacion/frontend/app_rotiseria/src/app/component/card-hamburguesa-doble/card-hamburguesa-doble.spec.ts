import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHamburguesaDoble } from './card-hamburguesa-doble';

describe('CardHamburguesaDoble', () => {
  let component: CardHamburguesaDoble;
  let fixture: ComponentFixture<CardHamburguesaDoble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHamburguesaDoble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHamburguesaDoble);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
