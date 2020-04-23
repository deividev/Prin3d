import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const  EMAIL_VALID =

  /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;
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
    debugger
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
    debugger
    const register = Object.assign({}, this.user, form.value);
    debugger
    if (this.signupForm.valid) {
        this.httpClient.post<any>(`${environment.apiBack}/users`, register).subscribe(
        (res) => console.log(res),
        (err) => console.log(err),);
        form.reset();
        debugger
    } else {
      console.log('Email no valido');

    }


  }

  private validateEmail(control: AbstractControl): { [key: string]: any } {
    debugger
    const url = control.value;
    debugger
    const correct = EMAIL_VALID.test(url);
    debugger
    return !correct ? { url: true } : null;
  }
}
