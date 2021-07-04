import { TestBed } from '@angular/core/testing';

import { LabOrderServiceService } from './lab-order-service.service';

describe('LabOrderServiceService', () => {
  let service: LabOrderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabOrderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
