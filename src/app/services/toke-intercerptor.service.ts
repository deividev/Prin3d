import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

import { AuthService  } from './auth.service'



@Injectable({
  providedIn: 'root'
})
export class TokeIntercerptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }


  intercept(req, next) {
    const tokenReq = req.clone({
      setHeaders: {
        Authorizarion: `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(tokenReq);
  }


}
