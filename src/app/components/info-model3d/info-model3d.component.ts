import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model3dService } from 'src/app/services/model3d.service';

@Component({
  selector: 'app-info-model3d',
  templateUrl: './info-model3d.component.html',
  styleUrls: ['./info-model3d.component.scss']
})
export class InfoModel3dComponent implements OnInit {

  isVisible3d = false;
  @Input() modelUrl:any = '';



  constructor(private activatedRoute: ActivatedRoute,
              private model3dService: Model3dService) {

  }

  changeView() {
    this.isVisible3d = !this.isVisible3d;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.modelId);
      this.model3dService.getModelById(params.modelId).subscribe((res: Response) => {
        this.modelUrl = [res];
        console.log(res);
        return this.modelUrl;
      })
    })
  }

}
