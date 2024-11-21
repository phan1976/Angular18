import { TestBed } from '@angular/core/testing';

import { MeinServerService } from './mein-server.service';

describe('MeinServerService', () => {
  let service: MeinServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeinServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
