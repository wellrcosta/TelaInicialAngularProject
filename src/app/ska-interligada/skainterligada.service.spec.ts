import {TestBed} from '@angular/core/testing';

import {SkainterligadaService} from './skainterligada.service';

describe('SkainterligadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkainterligadaService = TestBed.get(SkainterligadaService);
    expect(service).toBeTruthy();
  });
});
