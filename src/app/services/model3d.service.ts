import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Model3dService {

  private resource: string = 'models';
  constructor(private httpClient: HttpClient) { }

  getModels(): Observable <any> {
    return this.httpClient.get(`${environment.apiUrl}/${this.resource}`);
  }

  getModelById(uploadId: string): Observable <any> {
    return this.httpClient.get(`${environment.apiUrl}/${this.resource}/${uploadId}`)
  }
}
