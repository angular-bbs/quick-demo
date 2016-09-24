import {Route, RouterModule} from '@angular/router';
import {UserListComponent} from './user/list.component';
import {UserShowComponent} from './user/show.component';
const routes: Route[] = [
  {
    path: ':id',
    component: UserShowComponent
  },
  {
    path: '',
    component: UserListComponent
  },
];

export const routing = RouterModule.forRoot(routes);
