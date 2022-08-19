import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAutosComponent } from './detalle-autos.component';

describe('DetalleAutosComponent', () => {
  let component: DetalleAutosComponent;
  let fixture: ComponentFixture<DetalleAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
