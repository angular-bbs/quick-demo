import { Component, OnInit, Input } from '@angular/core';
import {UserModel} from './user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() item: UserModel;

  constructor() { }

  ngOnInit() {

  }

}
