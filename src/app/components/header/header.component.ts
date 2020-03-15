import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() categories: any;

  constructor(
    private categoriesService: CategoriesService,
  ) {

   }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }

}
