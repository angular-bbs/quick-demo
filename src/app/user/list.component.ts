import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';
import {UserApiService} from './api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class UserListComponent implements OnInit {

  items: UserModel[];

  constructor(private api: UserApiService) {
  }

  ngOnInit() {
    this.items = this.api.query();
  }
}
