import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoActualComponent } from './carrito-actual.component';

describe('CarritoActualComponent', () => {
  let component: CarritoActualComponent;
  let fixture: ComponentFixture<CarritoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoActualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
