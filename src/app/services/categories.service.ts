import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private resource: string = 'categories';
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable <any> {
    const endpoint = this.httpClient.get(`${environment.apiBack}/${this.resource}`);
    debugger
    console.log(endpoint);
    return  endpoint;
  }

}
