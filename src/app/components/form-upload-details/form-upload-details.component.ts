import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';


import { Model3dService } from 'src/app/services/model3d.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-form-upload-details',
  templateUrl: './form-upload-details.component.html',
  styleUrls: ['./form-upload-details.component.scss']
})
export class FormUploadDetailsComponent implements OnInit {

  formUpload : FormGroup;
  images: any;
  model: any;

  image: File;
  model3d: File;
  imageSelected: string | ArrayBuffer;
  model3dSelected: string | ArrayBuffer;
  comments: any = [];
  categories: ArrayBuffer;
  licenses: string | ArrayBuffer;

  constructor(private httpClient : HttpClient,
              private model3dService: Model3dService,
              private categoriesService: CategoriesService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((result) => {
      this.categories = result;
    }, error => {
      console.error(error);
    });

    this.model3dService.getLicenses().subscribe((result) => {
      this.licenses = result;
    }, error => {
      console.error(error);
    });

    this.formUpload = new FormGroup({
      userName: new FormControl(''),
      userId: new FormControl(''),
      title: new FormControl(''),
      categories: new FormControl('', [Validators.required, Validators.minLength(4)]),
      image: new FormControl(''),
      model: new FormControl(''),
      description: new FormControl(''),
      settings: new FormControl(''),
      custom: new FormControl(''),
      license: new FormControl(''),
      tags: new FormControl(''),
      comments: new FormControl(''),
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
      //Model3d preview
      const reader = new FileReader();
      reader.onload = e => this.model3dSelected = reader.result;
      reader.readAsDataURL(this.model3d);
    }
  }

  submit() {
    const formUpload = Object.assign({}, this.formUpload.value);
    const userId = localStorage.getItem('user');
    const userName = localStorage.getItem('username');
    const form = new FormData();
    form.append('userId', userId);
    form.append('userName', userName);
    form.append('title', this.formUpload.value.title);
    form.append('categories', this.formUpload.value.categories);
    form.append('image', this.image);
    form.append('model', this.model3d);
    form.append('description', this.formUpload.value.description);
    form.append('settings', this.formUpload.value.settings);
    form.append('custom', this.formUpload.value.custom);
    form.append('license', this.formUpload.value.license);
    form.append('tags', this.formUpload.value.tags);
    form.append('comments', this.comments);

    if (this.formUpload.valid) {
        this.model3dService.createModel(form).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.log(err),);
        this.formUpload.reset();
    }
  }

}
