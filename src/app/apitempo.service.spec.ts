import {TestBed} from '@angular/core/testing';

import {ApitempoService} from './apitempo.service';

describe('ApitempoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApitempoService = TestBed.get(ApitempoService);
    expect(service).toBeTruthy();
  });
});
