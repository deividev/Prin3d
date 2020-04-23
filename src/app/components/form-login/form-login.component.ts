import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(form){
    const login = Object.assign({}, this.formLogin, form.value);
    debugger

    this.httpClient.post<any>(`${environment.apiBack}/users`, login).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
     );
      debugger
  }

}
