import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-show',
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.scss']
})
export class UserShowComponent implements OnInit {

  item = {id: 1, name: 'a'};

  constructor() { }

  ngOnInit() {
  }

}
