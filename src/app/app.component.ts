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
  routedName = "";

  load: Boolean = true;
  loadLogin: Boolean = false;

  constructor (private router: Router,
               private authServide: AuthService) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url);
      if (event.url === '/login' || event.url === '/register') {
        debugger
        this.load = false;
      }
      if (this.authServide.loggedIn()) {
        debugger
        this.load = false;
        this.loadLogin = true;
      } else {
        this.loadLogin = false;
      }
    });
  }
  ngOnInit(): void {
  }

  login(){

  }
}
