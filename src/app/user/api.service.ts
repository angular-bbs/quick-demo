import {Injectable} from '@angular/core';
import {UserModel} from './user.model';
import * as _ from 'lodash';

@Injectable()
export class UserApiService {

  constructor() {
  }

  items = [
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    }
  ];

  query(): UserModel[] {
    return this.items;
  }

  get(id: number|string): UserModel {
    return _.find(this.items, {id: +id});
  }
}
