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

  constructor (private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url);
      if (event.url === 'category/5e81d4f2114174471450a4c9') {
        debugger
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
}
