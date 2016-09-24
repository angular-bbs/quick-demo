import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class UserListComponent implements OnInit {

  items: UserModel[] = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
