/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { UserListComponent } from './list.component';

describe('Component: UserList', () => {
  it('should create an instance', () => {
    let component = new UserListComponent();
    expect(component).toBeTruthy();
  });
});
