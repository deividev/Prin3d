import { Component, OnInit, Input } from '@angular/core';
import { Model3dService } from 'src/app/services/model3d.service';
import { Model3d } from 'src/app/models/model3d';
import { CategoriesService } from 'src/app/services/categories.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categories: any;
  @Input() listModels: any;
  @Input() title: string;

  public featuredTitle: string = "featured";
  public featuredModels: Array<Model3d> = [];

  private resource: any = 'users';


  constructor(private model3dService: Model3dService,
              private categoriesService: CategoriesService,
              private httpClient: HttpClient)
              {


          }

  ngOnInit(): void {
    this.model3dService.getModels().subscribe((result) => {
      //Ordena el resultado de los mas votados de mayor a menor y coge los 8 primeros;
      this.featuredModels = result;
    });

    this.categoriesService.getCategories().subscribe((result) => {
      //Me traigo todas las categorias de la DB
      this.categories = result;
    }, error => {
      console.error(error)
    });
  }
}
