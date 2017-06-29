import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
