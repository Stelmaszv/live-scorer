import { TestBed } from '@angular/core/testing';

import { Auth_Service } from './auth.service';

describe('AuthService', () => {
  let service: Auth_Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth_Service);
  });
  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */
});
