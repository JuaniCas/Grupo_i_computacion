import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card_Base } from './card-base';

describe('CardBase', () => {
  let component: Card_Base;
  let fixture: ComponentFixture<Card_Base>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card_Base]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card_Base);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
