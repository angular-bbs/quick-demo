import {Injectable} from '@angular/core';
import {UserModel} from './user.model';
import {Observable} from 'rxjs';

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

  query(): Observable<UserModel> {
    return Observable.from(this.items);
  }

  get(id: number|string): Observable<UserModel> {
    return Observable
      .from(this.items)
      .find(item=>item.id === +id);
  }
}
