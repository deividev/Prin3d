import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {

  username;
  userId;

  @Input() categories: any;

  constructor(private categoriesService: CategoriesService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.userId = localStorage.getItem('user');
    this.categoriesService.getCategories().subscribe((result) => {
      this.categories = result;
    }, error => {
      console.error(error);
    });
  }

  get searchNoActive():boolean {
    return !this.authService.loggedIn ;
    }
}
