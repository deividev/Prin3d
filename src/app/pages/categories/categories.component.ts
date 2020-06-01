import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Model3dService } from 'src/app/services/model3d.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Model3d } from 'src/app/models/model3d';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  showCategory: boolean = false;

  public listCategory:Array<Model3d> = [];
  public categoryTitle:string;


  @Input() listModelsId: any;
  constructor(
              private activedRouter: ActivatedRoute,
              private model3dServices: Model3dService,
              private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.activedRouter.params.subscribe((res) => {
      debugger
      this.model3dServices.getModels().subscribe((res) => {
        debugger
        const paramsId = this.activedRouter.snapshot.params.id;
        this.listCategory = this.getFilteredModelsById(res, paramsId)
        console.log(this.listCategory);
        this.categoriesService.getCategories().subscribe((res) => {
          debugger
          const category = this.getFilteredCategoriesById(res, paramsId)
          this.categoryTitle = category[0].title
          console.log(this.categoryTitle);

        })
      })
    })
  }

  getFilteredModelsById(res, id) {
    return res.filter(function(e) {
      return e.categories == id;
    });
  }

  getFilteredCategoriesById(res, id) {
    debugger
    return res.filter(function(e) {
      debugger
      return e._id == id;
    });
  }


}
