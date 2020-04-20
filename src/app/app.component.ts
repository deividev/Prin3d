import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  constructor (private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url);
      if (event.url === '/login' || event.url === '/register') {
        this.load = false;
      }  else {
        this.load = true;
      }
    });
    // this.router.events.subscribe(event => {
    //   if(event.constructor.name === "NavigationEnd") {
    //     this.routedName = event.url;
    //   }
    // });
  }
  ngOnInit(): void {
  }

  login(){

  }
}
