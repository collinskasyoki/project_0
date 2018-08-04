import { TestBed, inject } from '@angular/core/testing';

import { FashionService } from './fashion.service';

describe('FashionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FashionService]
    });
  });

  it('should be created', inject([FashionService], (service: FashionService) => {
    expect(service).toBeTruthy();
  }));
});
