import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { InfoModel3dComponent } from '../info-model3d/info-model3d.component';
import { DEFAULTS } from 'ts-node';
import { Model3dService } from 'src/app/services/model3d.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Model3d } from 'src/app/models/model3d';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'app-info-model',
  templateUrl: './info-model.component.html',
  styleUrls: ['./info-model.component.scss']
})
export class InfoModelComponent implements OnInit {

  isVisible = true;

  @ViewChild(InfoModel3dComponent) InfoModel3d: InfoModel3dComponent;


  model$: Observable<Model3d>;
  @Input() infoModel: any;

  constructor(private model3dService: Model3dService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.modelId);
      this.infoModel = this.model3dService.getModelById(params.modelId).pipe(
        this.infoModel = this.infoModel.operators.modelId
      )
      return this.infoModel ;
    })

  }
  changeComponent() {
    this.InfoModel3d.changeView();
    this.isVisible = !this.isVisible;
  }

}
