import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-modal-collection',
  templateUrl: './modal-collection.component.html',
  styleUrls: ['./modal-collection.component.scss']
})
export class ModalCollectionComponent implements OnInit {

  @Input() listCollections: any;

  @Input()
  private _isEven: boolean;
  public get isEven(): boolean {
    return this._isEven;
  }
  public set isEven(value: boolean) {
    this._isEven = value;
  }

  public class: string;

  @HostBinding('class.showModal')
  isOpen = false;
  constructor(
    private modalService: ModalService
  ) {

   }


  ngOnInit() {
    this.modalService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
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
