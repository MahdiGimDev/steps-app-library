import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {AuthorComponent} from './author/author.component';
import {TypebookComponent} from './typebook/typebook.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SharedService } from './shared.service';

/*
const routes: Routes = [
  {path:'book',component:BookComponent},
  {path:'author',component:AuthorComponent},
  {path:'typeBook',component:TypebookComponent},
  { path:'user',component:UserComponent, canActivate: [ SharedService]},
    {path:'login',component:LoginComponent}

    

];

*/
@NgModule({
  imports: [ ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
