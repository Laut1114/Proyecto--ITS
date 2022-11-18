import { TestBed } from '@angular/core/testing';

import { PreInscripcionService } from './pre-inscripcion.service';

describe('PreInscripcionService', () => {
  let service: PreInscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreInscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
