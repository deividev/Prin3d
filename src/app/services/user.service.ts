import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private resource: string = 'users';
  constructor(private httpClient: HttpClient) { }


  getUserById(userId: string): Observable<User> {
    return this.httpClient.get(`${environment.apiUrl}/${this.resource}/${userId}`);
  }

  getLoguedUser(id) {
    return this.httpClient.get(`${environment.apiBack}/user/${id}`)
  }
}
