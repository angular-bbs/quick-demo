/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { UserDetailComponent } from './detail.component';

describe('Component: UserDetail', () => {
  it('should create an instance', () => {
    let component = new UserDetailComponent();
    expect(component).toBeTruthy();
  });
});
