import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private http: HttpClient, private SharedService: SharedService) { }

  ngOnInit(): void {

  }
  loginModel = {
    userName: '',
    password: '',
  };



  invalidLogin: boolean;
  token: string;




  errorLogin = '  ';


  async onLogin() {
    this.errorLogin = '';
    try {
      const data = await this.SharedService.loginUser(this.loginModel.userName.trim(), this.loginModel.password).toPromise();
      this.SharedService.setToken(data.Token);
      // this.router.navigateByUrl('/book');
      window.location.href = '/book'
    } catch (error) {
      if (error.error) {
        this.errorLogin = "User name or password ";
      } else {
        this.errorLogin = 'Internal server';
      }
    }
  }


  


}
