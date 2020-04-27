import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {


  private emailPattern: any =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  user: any;
  signupForm: FormGroup;
  router: any;


  constructor(private formBuilder: FormBuilder,
              private httpClient : HttpClient) { }

  ngOnInit(): void {
      this.signupForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
    });
  }





  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      this.signupForm = this.formBuilder.group({
        name: [ this.user.name, [Validators.required, Validators.minLength(4)]],
        email: [ this.user.email, [Validators.required, Validators.pattern(this.emailPattern)]],
        username: [ this.user.userName , [Validators.required, Validators.minLength(4)]],
        password: [ this.user.password , [Validators.required, Validators.minLength(8)]],
        passwordConfirm: [ this.user.passwordConfirm, [Validators.required, Validators.minLength(8)]],
        });
    } else {
      this.signupForm = this.formBuilder.group({
        name: [ '', [Validators.required, Validators.minLength(4)]],
        email: [ '', [Validators.required, Validators.pattern(this.emailPattern)]],
        username: [ '', [Validators.required, Validators.minLength(4)]],
        password: [ '', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: [ '', [Validators.required, Validators.minLength(8)]],
      });
    }
  }

  onSave(form) {
    const register = Object.assign({}, this.signupForm.value);
    if (this.signupForm.valid) {
        this.httpClient.post<any>(`${environment.apiBack}/users`, register).subscribe(
        (res) => console.log(res),
        (err) => console.log(err),);
        form.reset();
    } else {
      console.log('Email no valido');
    }
  }
}
