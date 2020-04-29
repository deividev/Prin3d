import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Router  } from '@angular/router'
import { Observable } from 'rxjs';



import { User } from '../models/user';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient,
              private router: Router,
              ) { }

  signUp(User): Observable <any> {
    debugger
    return this.http.post(`${environment.apiBack}/signup`, User)
  }

  signIn(User): Observable <any> {
    debugger
    return this.http.post(`${environment.apiBack}/signin`, User)
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    debugger
  }

}


