import { TestBed } from '@angular/core/testing';

import { DetalleAutosGuard } from './detalle-autos.guard';

describe('DetalleAutosGuard', () => {
  let guard: DetalleAutosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetalleAutosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
