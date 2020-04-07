import { Component, OnInit } from '@angular/core';
import { Model3dService } from 'src/app/services/model3d.service';
import { Model3d } from 'src/app/models/model3d';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public featuredModels: Array<Model3d> = [];


  public featuredTitle: string = "featured";

  constructor(private model3dService: Model3dService,) { }

  ngOnInit(): void {
    this.model3dService.getModels().subscribe((result) => {
      //Ordena el resultado de los mas votados de mayor a menor y coge los 8 primeros;
      this.featuredModels = result;
    });
  }
}
