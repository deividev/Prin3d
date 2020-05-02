import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Model3dService } from 'src/app/services/model3d.service';
import { Model3d } from 'src/app/models/model3d';

@Component({
  selector: 'app-listModel',
  templateUrl: './listModel.component.html',
  styleUrls: ['./listModel.component.scss']
})
export class ListModelComponent implements OnInit {


  @Input() listModels: any;
  @Input() title: string;

  categoriesId: any;
  routeCategorie: any;






  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getCategories().subscribe((result) => {
      //Me traigo todas las categorias de la DB
      // this.categoriesId = result.filter(result._id);
    });


   }

  ngOnInit(): void {
  }

}

