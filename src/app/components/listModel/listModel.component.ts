import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

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
      debugger
      //Me traigo todas las categorias de la DB
      // const id = result.paramMap('id');
      // console.log(id);
      debugger
      // debugger"5e81d4f2114174471450a4c9".class
    });
   }

  ngOnInit(): void {
  }

}

