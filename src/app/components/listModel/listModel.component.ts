import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listModel',
  templateUrl: './listModel.component.html',
  styleUrls: ['./listModel.component.scss']
})
export class ListModelComponent implements OnInit {

  @Input() listModels: any;
  @Input() title: string;


  constructor() {

   }

  ngOnInit(): void {
  }

}

