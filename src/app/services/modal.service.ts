import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    debugger
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    debugger
  }
}
