import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';



import { Model3d } from '../../models/model3d';
import { Model3dService } from 'src/app/services/model3d.service';
@Component({
  selector: 'app-form-upload-details',
  templateUrl: './form-upload-details.component.html',
  styleUrls: ['./form-upload-details.component.scss']
})
export class FormUploadDetailsComponent implements OnInit {

  formUpload : FormGroup;
  uploadModel: FormGroup;
  images: any;
  model: any;

  image: File;
  model3d: File;
  imageSelected: string | ArrayBuffer;
  model3dSelected: string | ArrayBuffer;

  constructor(private httpClient : HttpClient,
              private model3dService: Model3dService) { }

  ngOnInit(): void {
    this.formUpload = new FormGroup({
      title: new FormControl(''),
      categories: new FormControl(''),
      img: new FormControl(''),
      model: new FormControl(''),
      description: new FormControl(''),
      settings: new FormControl(''),
      custom: new FormControl(''),
      license: new FormControl(''),
      tags: new FormControl(''),
    });
  }

  changeFile(event) {
    if (event.target.files.length > 0) {
      this.image = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      reader.onload = e => this.imageSelected = reader.result;
      reader.readAsDataURL(this.image);
    }
  }

  changeModel(event) {
    if (event.target.files.length > 0) {
      this.model3d = <File>event.target.files[0];
      debugger
      //Model3d preview
      const reader = new FileReader();
      reader.onload = e => this.model3dSelected = reader.result;
      reader.readAsDataURL(this.model3d);
    }
  }


  submit() {
    const formUpload = Object.assign({}, this.formUpload.value);

    const fdImg = new FormData();
    fdImg.append('image', this.image);
    debugger
    this.httpClient.post<any>(`${environment.apiBack}/upload`, fdImg).subscribe((res) => {
        const imagePath = res;
        debugger
        console.log(imagePath);
      },
      (err) => {
        debugger
        console.log(err)
      }
    );
    debugger
    if (this.formUpload.valid) {
        debugger
        this.model3dService.createModel(formUpload).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.log(err),);
        this.formUpload.reset();
    }
  }

}
