import { TestBed } from '@angular/core/testing';

import { AuthIfAuthenticatedService } from './auth-if-authenticated.service';

describe('AuthIfAuthenticatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthIfAuthenticatedService = TestBed.get(AuthIfAuthenticatedService);
    expect(service).toBeTruthy();
  });
});
