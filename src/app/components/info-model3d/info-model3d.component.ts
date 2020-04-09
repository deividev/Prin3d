import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-model3d',
  templateUrl: './info-model3d.component.html',
  styleUrls: ['./info-model3d.component.scss']
})
export class InfoModel3dComponent implements OnInit {

  isVisible3d = false;




  constructor() {

  }

  changeView() {
    this.isVisible3d = !this.isVisible3d;
  }

  ngOnInit(): void {

  }

}
