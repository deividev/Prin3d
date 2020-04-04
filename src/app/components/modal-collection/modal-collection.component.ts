import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-modal-collection',
  templateUrl: './modal-collection.component.html',
  styleUrls: ['./modal-collection.component.scss']
})
export class ModalCollectionComponent implements OnInit {


  @Output() change: EventEmitter<boolean> = new EventEmitter();

  @Input() listCollections: any;

  isOpen = false;

  constructor() {

   }

   toggle() {
    console.log("oleeee");
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  ngOnInit() {
    console.log("pajaro");

  }

  // showModal() {
  //   debugger
  //   this.isEven = true;
  //   this.class = 'showModal';
  // }
  // closeModal() {
  //   this.isEven = false;
  //   if (this.isEven) {
  //     this.class = 'modal';
  //   }
  // }

}
