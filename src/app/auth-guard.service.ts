import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService} from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(private router: Router , private jwtHelper: JwtHelperService) { 

  }


  
}

