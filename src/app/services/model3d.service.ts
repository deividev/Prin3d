import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Model3dService {

  private resource: string = 'models';
  constructor(private http: HttpClient) { }

  createModel(form): Observable <any> {
    return this.http.post(`${environment.apiBack}/upload`, form)
  }


  getModels(): Observable <any> {
    return this.http.get(`${environment.apiBack}/${this.resource}`);
  }

  getModelById(id): Observable <any> {
    return this.http.get(`${environment.apiBack}/model/${id}`)
  }

  getLicenses(): Observable <any> {
    return this.http.get(`${environment.apiBack}/licenses`)
  }
}
