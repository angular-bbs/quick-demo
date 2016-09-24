import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';
import {UserApiService} from './api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class UserListComponent implements OnInit {

  items: Observable<UserModel[]>;

  constructor(private api: UserApiService) {
  }

  ngOnInit() {
    this.items = this.api.query()
      .toArray();
  }
}
