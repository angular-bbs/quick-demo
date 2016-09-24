import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';
import {UserApiService} from './api.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-show',
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.scss']
})
export class UserShowComponent implements OnInit {

  item: Observable<UserModel>;

  constructor(private api: UserApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.item = this.api.get(id);
  }
}
