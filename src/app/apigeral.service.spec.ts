import {TestBed} from '@angular/core/testing';

import {ApigeralService} from './apigeral.service';

describe('ApigeralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApigeralService = TestBed.get(ApigeralService);
    expect(service).toBeTruthy();
  });
});
