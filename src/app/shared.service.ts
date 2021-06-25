import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class SharedService implements CanActivate {

  readonly APIUrl = "https://localhost:44366/api";


  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

  JWToken = "JW_token";
  USER = "user";
  ///Crud service User
  getUserList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/user');
  }

  addUser(val: any) {
    return this.http.post(this.APIUrl + '/user', val);
  }
  updateUser(val: any) {
    return this.http.put(this.APIUrl + '/user', val);
  }


  deleteUser(val: any) {
    return this.http.delete(this.APIUrl + '/user/' + val);
  }




  ///////Crud Service Author
  getAuthorList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/author');
  }

  addAuthor(val: any) {
    return this.http.post(this.APIUrl + '/author', val);
  }
  updateAuthor(val: any) {
    return this.http.put(this.APIUrl + '/author', val);
  }


  deleteAuthor(val: any) {
    return this.http.delete(this.APIUrl + '/author/' + val);
  }

  ///////////for book/////////

  getBookList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/book');
  }

  addBook(val: any) {
    return this.http.post(this.APIUrl + '/book', val);
  }
  updateBook(val: any) {
    return this.http.put(this.APIUrl + '/book', val);
  }


  deleteBook(val: any) {
    return this.http.delete(this.APIUrl + '/book/' + val);
  }



  getAllAuthorNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/book/GetAllAuthorNames');

  }



  getAllTypesNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/book/GetAllTypes');

  }


  ////////Type of book services

  getTypeList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/typeBook');
  }

  addType(val: any) {
    return this.http.post(this.APIUrl + '/typeBook', val);
  }


  updateType(val: any) {
    return this.http.put(this.APIUrl + '/typeBook', val);
  }


  deleteType(val: any) {
    return this.http.delete(this.APIUrl + '/typeBook/' + val);
  }

  //////////////



  loginUser(userName: string, password: string): Observable<any> {
    const payload = {
      userName,
      password,
    };
    return this.http.post(`${this.APIUrl}/auth/login`, payload);
  }




  setToken(token: string) {
    this.setUser(token);
    return localStorage.setItem(this.JWToken, token);
  }
  setUser(token: string) {
    console.log({ token });
    const decoded = jwt_decode(token);
    console.log({ decoded });
    return localStorage.setItem(this.USER, JSON.stringify(decoded));
  }

  getuser() {
    const payload = localStorage.getItem(this.USER);
    if (payload) {
      try {
        return JSON.parse(payload);
      } catch (error) {
        console.log({ error });
      }
    }
    return null;
  }

  clearStorage() {
    localStorage.clear()
  }


  canActivate() {
    const token = localStorage.getItem("JW_token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;

  }



}
