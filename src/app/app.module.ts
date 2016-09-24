import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {UserListComponent} from './user/list.component';
import {UserShowComponent} from './user/show.component';
import {routing} from './app.routing';
import {UserApiService} from './user/api.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserShowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [UserApiService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
