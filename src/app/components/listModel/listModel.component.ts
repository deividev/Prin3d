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

  categories: any;


  entradasInvalidas = 0;

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getCategories().subscribe((result) => {
      debugger
      //Me traigo todas las categorias de la DB
      this.categories = result.includes.call(arguments, '5e81d4f2114174471450a4c9');
      debugger
      // debugger"5e81d4f2114174471450a4c9"
    });
   }

  ngOnInit(): void {
  }

}

