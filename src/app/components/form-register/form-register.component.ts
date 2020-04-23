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


  emailRegex  = new RegExp
  ('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/');

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
        email: [ this.user.email, [Validators.required, Validators.email]],
        username: [ this.user.userName , [Validators.required, Validators.minLength(4)]],
        password: [ this.user.password , [Validators.required, Validators.minLength(8)]],
        passwordConfirm: [ this.user.passwordConfirm, [Validators.required, Validators.minLength(8)]],
        });
    } else {
      this.signupForm = this.formBuilder.group({
        name: [ '', [Validators.required, Validators.minLength(4)]],
        email: [ '', [Validators.required, Validators.email]],
        username: [ '', [Validators.required, Validators.minLength(4)]],
        password: [ '', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: [ '', [Validators.required, Validators.minLength(8)]],
      });
    }
  }

  onSave(form) {
    debugger
    const update = Object.assign({}, this.user, form.value);
    const formData = new FormData;
    formData.append('file', update);

    debugger
    this.httpClient.post<any>(`${environment.apiBack}/users`, update).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    debugger
    form.reset();
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
