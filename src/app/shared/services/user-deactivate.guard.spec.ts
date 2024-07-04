import { TestBed } from '@angular/core/testing';

import { UserDeactivateGuard } from './user-deactivate.guard';

describe('UserDeactivateGuard', () => {
  let guard: UserDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
