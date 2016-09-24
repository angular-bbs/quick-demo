import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';

@Component({
  selector: 'app-user-show',
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.scss']
})
export class UserShowComponent implements OnInit {

  item: UserModel = {
    id: 1,
    name: 'a'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
