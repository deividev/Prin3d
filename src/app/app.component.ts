import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AuthService  } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'print3d';


  url: string;


  constructor (private router: Router,
               private authService: AuthService) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.url = event.url;
      console.log(event.url);
    });
  }
  ngOnInit(): void {
  }

  login(){
  }

  get isHeaderActive() {

    return !(this.url === '/register' || this.url === '/login');
  }

  get isHeaderLoginActive() {

  return this.authService.loggedIn;
  }

  get isHeaderNoActive() {
    if (this.url === '/404'){

      return false;
    }

    return true;
  }

}
