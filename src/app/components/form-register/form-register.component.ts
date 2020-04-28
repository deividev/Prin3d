import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';


import { AuthService } from '../../services/auth.service';
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
  formRegister: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {
      this.formRegister = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
    });
  }





  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      this.formRegister = this.formBuilder.group({
        name: [ this.user.name, [Validators.required, Validators.minLength(4)]],
        email: [ this.user.email, [Validators.required, Validators.pattern(this.emailPattern)]],
        username: [ this.user.userName , [Validators.required, Validators.minLength(4)]],
        password: [ this.user.password , [Validators.required, Validators.minLength(8)]],
        passwordConfirm: [ this.user.passwordConfirm, [Validators.required, Validators.minLength(8)]],
        });
    } else {
      this.formRegister = this.formBuilder.group({
        name: [ '', [Validators.required, Validators.minLength(4)]],
        email: [ '', [Validators.required, Validators.pattern(this.emailPattern)]],
        username: [ '', [Validators.required, Validators.minLength(4)]],
        password: [ '', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: [ '', [Validators.required, Validators.minLength(8)]],
      });
    }
  }

  register() {
    const User = Object.assign({}, this.formRegister.value);
    if (this.formRegister.valid) {
        debugger
        this.authService.signUp(User).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        (err) => console.log(err),);
        this.formRegister.reset();
    }
  }
}
