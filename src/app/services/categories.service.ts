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
    return this.httpClient.get(`${environment.apiBack}/${this.resource}`);
  }

}
