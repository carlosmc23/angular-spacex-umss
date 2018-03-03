import { TestBed, inject } from '@angular/core/testing';

import { SpacexService } from './spacex.service';

describe('SpacexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpacexService]
    });
  });

  it('should be created', inject([SpacexService], (service: SpacexService) => {
    expect(service).toBeTruthy();
  }));
});
