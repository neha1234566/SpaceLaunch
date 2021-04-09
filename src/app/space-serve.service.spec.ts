import { TestBed } from '@angular/core/testing';

import { SpaceServeService } from './space-serve.service';

describe('SpaceServeService', () => {
  let service: SpaceServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
