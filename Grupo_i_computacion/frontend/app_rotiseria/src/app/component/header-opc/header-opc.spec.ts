import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOpc } from './header-opc';

describe('HeaderOpc', () => {
  let component: HeaderOpc;
  let fixture: ComponentFixture<HeaderOpc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderOpc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOpc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
