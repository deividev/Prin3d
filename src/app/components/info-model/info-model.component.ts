import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { InfoModel3dComponent } from '../info-model3d/info-model3d.component';
import { Model3dService } from 'src/app/services/model3d.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-model',
  templateUrl: './info-model.component.html',
  styleUrls: ['./info-model.component.scss']
})
export class InfoModelComponent implements OnInit {

  isVisible = true;

  @ViewChild(InfoModel3dComponent) InfoModel3d: InfoModel3dComponent;

  @Input() infoModel: any = [];

  constructor(private model3dService: Model3dService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.modelId);
      this.model3dService.getModelById(params.modelId).subscribe((res: Response) => {
        this.infoModel = [res];
        console.log(res);
        return this.infoModel || [];
      })
    })

  }
  changeComponent() {
    this.InfoModel3d.changeView();
    this.isVisible = !this.isVisible;
  }

}
