import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() categories: any;
  @Input() isEven: boolean;

  public class: string;


  constructor(
    private categoriesService: CategoriesService,
    private modalService: ModalService,
  ) {

   }
   @HostListener('click')
      click() {
        debugger
        this.modalService.toggle();
    }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((result) => {
      this.categories = result;
    }, error => {
      console.error(error)
    });


  }
}
