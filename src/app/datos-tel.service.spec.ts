import { TestBed } from '@angular/core/testing';

import { DatosTelService } from './datos-tel.service';

describe('DatosTelService', () => {
  let service: DatosTelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosTelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
