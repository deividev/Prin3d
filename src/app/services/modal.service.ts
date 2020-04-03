import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  @Input() isEven: boolean;

  public class: string;

  constructor() { }

  ngOnInit(): void {

  }



}
