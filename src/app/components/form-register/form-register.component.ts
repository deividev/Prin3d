import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {



  user: any;

  constructor(private formBuilder: FormBuilder,
              private httpClient : HttpClient) { }

  ngOnInit(): void {

  }


  formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),
  });


  ngOnChanges(changes: SimpleChanges): void {
    // a la raul
    if (this.user) {
      this.formGroup = this.formBuilder.group({
        name: [ this.user.name, [Validators.required, Validators.minLength(4)]],
        email: [ this.user.email, [Validators.required ]],
        username: [ this.user.userName , [Validators.required, Validators.minLength(4)]],
        password: [ this.user.password , [Validators.required, Validators.minLength(8)]],
        passwordConfirm: [ this.user.passwordConfirm, [Validators.required, Validators.minLength(8)]],
        });
    } else {
      this.formGroup = this.formBuilder.group({
        name: [ '', [Validators.required, Validators.minLength(4)]],
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

    // formData.append('file', this.images);

    debugger
    this.httpClient.post<any>(`${environment.apiBack}/users`, update).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    debugger
    form.reset();
    debugger
  }

}
