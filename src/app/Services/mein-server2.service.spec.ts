import { TestBed } from '@angular/core/testing';

import { MeinServer2Service } from './mein-server2.service';

describe('MeinServer2Service', () => {
  let service: MeinServer2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeinServer2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
