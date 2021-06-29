import { TestBed } from '@angular/core/testing';

import { PatientSymptomService } from './patient-symptom.service';

describe('PatientSymptomService', () => {
  let service: PatientSymptomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientSymptomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
