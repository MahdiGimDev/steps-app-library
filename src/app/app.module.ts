import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { ShowAuthorComponent } from './author/show-author/show-author.component';
import { AddEditAuthorComponent } from './author/add-edit-author/add-edit-author.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';
import {SharedService} from './shared.service'
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypebookComponent } from './typebook/typebook.component'
import { ShowTypeComponent } from './typebook/show-type/show-type.component';
import { AddEditTypeComponent } from './typebook/add-edit-type/add-edit-type.component';
import { UserComponent } from './user/user.component';
import { UserAddEditComponent } from './user/user-add-edit/user-add-edit.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { LoginComponent } from './user/login/login.component';
import { JwtModule} from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

export function tokenGetter (){
  return localStorage.getItem("jwt");
}







@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ShowBookComponent,
    TypebookComponent,
    ShowTypeComponent,
    AddEditTypeComponent,
    AuthorComponent,
    ShowAuthorComponent,
    AddEditAuthorComponent,
    AddEditBookComponent,
    UserComponent,
    UserAddEditComponent,
    UserShowComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
   
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'book',component:BookComponent},
      {path:'author',component:AuthorComponent},
      {path:'typeBook',component:TypebookComponent},
      {path:'home',component:HomeComponent},
      { path:'user',component:UserComponent ,canActivate: [SharedService]},
      {path:'login',component:LoginComponent}]),  
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:44366"],
        disallowedRoutes:[],
      }
    })
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
