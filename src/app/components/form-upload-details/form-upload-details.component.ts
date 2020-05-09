import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';


import { Model3d } from '../../models/model3d';
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


  constructor(private httpClient : HttpClient) { }

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

  // upload(event){
  //   this.fileUpload.append('form', JSON.stringify(this.formUpload.value));
  //   this.httpClient.post(`${environment.apiBack}/users/images`, this.fileUpload).subscribe();
  // }

  // changeFile(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.images = file;
  //   }
  //   // this.formUpload.cont rols['file'].setValue(event.target.files[0]);
  // }

  changeFile(event) {
    if (event.target.files.length > 0) {
      this.image = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      reader.onload = e => this.imageSelected = reader.result;
      reader.readAsDataURL(this.image);
    }
  }

  upload(event){

    // const fdImg = new FormData();
    const fdModel = new FormData();
    // fdImg.append('image', this.images);
    fdModel.append('image', this.model);
    fdModel.append('form', this.model);
    fdModel.append('model', this.model);

    const formModel = new FormData()

    // const upload = Object.assign({}, this.formUpload);
    debugger
    // debugger
    // this.httpClient.post<any>(`${environment.apiBack}/upload`, fdImg).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err),
    // );
    // debugger
    // this.httpClient.post<any>(`${environment.apiBack}/upload`, fdModel).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err),
    // );
    debugger
    this.httpClient.post<any>(`${environment.apiBack}/models`, fdModel).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
     );
    debugger
  }


}
