import {TestBed} from '@angular/core/testing';

import {AniversarioSKAService} from './aniversario-ska.service';

describe('AniversarioSKAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AniversarioSKAService = TestBed.get(AniversarioSKAService);
    expect(service).toBeTruthy();
  });
});
