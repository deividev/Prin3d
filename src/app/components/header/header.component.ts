import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Model3dService } from 'src/app/services/model3d.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() categories: any;

  constructor(
    private categoriesService: CategoriesService,
    private model3dService: Model3dService
  ) {

   }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((result) => {
      this.categories = result;
    }, error => {
      console.error(error)
    });
  }

}
