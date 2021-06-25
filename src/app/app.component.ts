import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-app-lib3';
  user = null;
  isAdmin = false;
  constructor(private router: Router, private jwtHelper: JwtHelperService, private shared: SharedService) {
    this.user = shared.getuser()
    console.log({ user: this.user });

    if (this.user) {
      this.isAdmin = this.user['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] == 'admin'
    }
  }




  isUserAuthentificated() {
    const token: string = localStorage.getItem("JW_token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else { return false; }
  }

  logOut() {
    window.location.href = '/login';

    this.shared.clearStorage();
    
  //  this.router.navigateByUrl('/login');
  }

}
