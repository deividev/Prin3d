import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-form-upload-details',
  templateUrl: './form-upload-details.component.html',
  styleUrls: ['./form-upload-details.component.scss']
})
export class FormUploadDetailsComponent implements OnInit {

  fileUpload = new FormData();
  formUpload : FormGroup;
  uploadModel: FormGroup;
  images: any;

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
      file : new FormControl(''),
    });
  }

  // upload(event){
  //   this.fileUpload.append('form', JSON.stringify(this.formUpload.value));
  //   this.httpClient.post(`${environment.apiBack}/users/images`, this.fileUpload).subscribe();
  // }

  // changeFile(event) {
  //   this.fileUpload.append('file', event.target.files[0]);
  //   // this.formUpload.controls['file'].setValue(event.target.files[0]);
  // }


  upload(form){
    const details = Object.assign({}, this.formUpload, form.value);
    debugger
    const formData = new FormData;
    formData.append('file', this.images);
    debugger

    this.httpClient.post<any>(`${environment.apiBack}/models`, details.value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
     );
      debugger
  }

  changeFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
    // this.formUpload.controls['file'].setValue(event.target.files[0]);
  }
}
