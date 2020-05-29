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

  public listCategory:Array<Model3d>;
  constructor(
              private activedRouter: ActivatedRoute,
              private model3dServices: Model3dService,
              private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.model3dServices.getModelsCategory().subscribe((res) => {
      debugger
      const paramsId = this.activedRouter.snapshot.params.id;
      Object.keys(res).forEach(e=>{
        if(res[e].categories == paramsId){
          this.listCategory.push(res[e]);
          console.log(this.listCategory);
        }
      });
    })
  }


}
