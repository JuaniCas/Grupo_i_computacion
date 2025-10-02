import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloquearClientesComponent } from './bloquear-clientes.component';

describe('BloquearClientesComponent', () => {
  let component: BloquearClientesComponent;
  let fixture: ComponentFixture<BloquearClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloquearClientesComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloquearClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
