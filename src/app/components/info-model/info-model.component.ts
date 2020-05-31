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
  date: number = Date.now();

  isVisible = true;

  downloadModel;

  @ViewChild(InfoModel3dComponent) InfoModel3d: InfoModel3dComponent;

  @Input() infoModel: any = [];

  constructor(private model3dService: Model3dService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.modelId);
      this.model3dService.getModelById(params.modelId).subscribe((res) => {
        debugger
        this.date = res.created_at
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

  plusLike(infoModel) {
    this.activatedRoute.params.subscribe((params) => {
      debugger
      const id = params.modelId;
      ++ infoModel[0].likes;
      this.model3dService.updateModel(infoModel, id).subscribe((res) => {
        debugger
        console.log(res);
      });
    })
  }

  download() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.modelId;
      this.model3dService.downloadModel(id).subscribe((res) =>{
        debugger
      this.downloadModel = res
      console.log(res);
      })
    })
  }

}
