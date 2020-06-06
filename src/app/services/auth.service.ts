import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  loggedIn: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
    ) { }

  get isLogged() {
    return this.storage.has('token');
  }

  signUp(User): Observable<any> {
    return this.http.post(`${environment.apiBack}/signup`, User);
  }

  signIn(User): Observable<any> {
    return this.http.post(`${environment.apiBack}/signin`, User);
  }

  changeLoggedIn(value) {
    this.loggedIn = true;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.loggedIn = false;
  }
}
