import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoModel3dComponent } from '../info-model3d/info-model3d.component';
import { DEFAULTS } from 'ts-node';

@Component({
  selector: 'app-info-model',
  templateUrl: './info-model.component.html',
  styleUrls: ['./info-model.component.scss']
})
export class InfoModelComponent implements OnInit {

  isVisible = true;

  @ViewChild(InfoModel3dComponent) InfoModel3d: InfoModel3dComponent;
  changeComponent() {
    debugger
    this.InfoModel3d.changeView();
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
