import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;


  emailPattern: any =
  /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {

    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }


  login(){
    const User = Object.assign({}, this.formLogin.value);
    if (this.formLogin.valid) {
        this.authService.signIn(User).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', res.user._id);
          localStorage.setItem('username', res.user.username);
          this.authService.changeLoggedIn(true);
          this.router.navigate(['/home']);
          return res;
        },
        (err) => console.log(err),);
        this.formLogin.reset();
    }
  }


  showPassword () {

  }

}
