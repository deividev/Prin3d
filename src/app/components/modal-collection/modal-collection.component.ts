import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-modal-collection',
  templateUrl: './modal-collection.component.html',
  styleUrls: ['./modal-collection.component.scss']
})
export class ModalCollectionComponent implements OnInit {


  @Input() isEven: boolean;

  public class: string;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {

  }

  showModal() {
    this.isEven = true;
    this.class = 'showModal';
  }
  closeModal() {
    this.isEven = false;
    if (this.isEven) {
      this.class = 'modal';
    }
  }

}
