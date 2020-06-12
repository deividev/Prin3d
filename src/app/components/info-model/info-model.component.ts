import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { InfoModel3dComponent } from "../info-model3d/info-model3d.component";
import { Model3dService } from "src/app/services/model3d.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-info-model",
  templateUrl: "./info-model.component.html",
  styleUrls: ["./info-model.component.scss"],
})
export class InfoModelComponent implements OnInit {
  date: number = Date.now();

  isVisible = true;
  environment = environment;
  downloadModel;

  @ViewChild(InfoModel3dComponent) InfoModel3d: InfoModel3dComponent;

  @Input() infoModel: any = [];

  formComments: FormGroup;
  comments = [];

  constructor(
    private model3dService: Model3dService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formComments = new FormGroup({
      comment: new FormControl(""),
    });
    this.activatedRoute.params.subscribe((params) => {
      this.model3dService.getModelById(params.modelId).subscribe((res) => {
        this.date = res.created_at;
        this.infoModel = [res];
        return this.infoModel || [];
      });
    });
  }
  changeComponent() {
    this.InfoModel3d.changeView();
    this.isVisible = !this.isVisible;
  }

  plusLike(infoModel) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.modelId;
      ++infoModel[0].likes;
      this.model3dService.updateModel(infoModel, id).subscribe((res) => {
        console.log(res);
      });
    });
  }

  download(infoModel) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.modelId;
      ++infoModel[0].downloads;
      this.model3dService.updateModel(infoModel, id).subscribe((res) => {
        console.log(res);
      });
      this.model3dService.downloadModel(id).subscribe((res) => {
        this.downloadModel = res;
        console.log(res);
      });
    });
  }

  submitComments() {
    this.infoModel[0].comments.push(this.formComments.value);
    // this.infoModel =  Object.assign({}, this.formComments.value, this.infoModel)
    this.model3dService
      .updateModel(this.infoModel, this.infoModel[0].userId)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
