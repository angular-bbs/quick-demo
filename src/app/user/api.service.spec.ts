/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { UserApiService } from './api.service';

describe('Service: UserApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [UserApiService]});
  });

  let userApi: UserApiService;
  beforeEach(inject([UserApiService], (userApiService: UserApiService) => {
    userApi = userApiService;
  }));

  it('should ...', () => {
    expect(userApi).toBeTruthy();
  });
});
