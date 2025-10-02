import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificarStockComponent } from './verificar-stock.component';

describe('VerificarStockComponent', () => {
  let component: VerificarStockComponent;
  let fixture: ComponentFixture<VerificarStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarStockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificarStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
