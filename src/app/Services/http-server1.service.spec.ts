import { TestBed } from '@angular/core/testing';

import { HttpServer1Service } from './http-server1.service';

describe('HttpServer1Service', () => {
  let service: HttpServer1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServer1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
