import { Component, OnInit, Input } from '@angular/core';

import { CategoriesService  } from '../../services/categories.service'
import { Model3dService } from 'src/app/services/model3d.service';
import { Model3d } from 'src/app/models/model3d';

@Component({
  selector: 'app-listBtn',
  templateUrl: './listBtn.component.html',
  styleUrls: ['./listBtn.component.scss']
})
export class ListBtnComponent implements OnInit {

  @Input() listModels: any;


  constructor(private categoriesService: CategoriesService,
              ) {
    this.categoriesService.getCategories().subscribe((result) => {

    });

   }

  ngOnInit(): void {
  }

}
