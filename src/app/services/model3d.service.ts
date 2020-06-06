import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Model3dService {

  private resource: string = 'models';





  constructor(private http: HttpClient,
              private activedRouter: ActivatedRoute,) { }

  createModel(form): Observable <any> {
    return this.http.post(`${environment.apiBack}/upload`, form)
  }

  updateModel(infoModel, id): Observable <any> {
    return this.http.put(`${environment.apiBack}/models/${id}`, infoModel)
  }

  downloadModel(id): Observable <any> {
    return this.http.get(`${environment.apiBack}/download/${id}`)
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

  getModelsCategory() {
    return this.http.get(`${environment.apiBack}/${this.resource}`)
  }

}
