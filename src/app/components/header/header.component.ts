import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ModalService } from 'src/app/services/modal.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((result) => {
      this.categories = result;
    }, error => {
      console.error(error)
    });
  }
}

