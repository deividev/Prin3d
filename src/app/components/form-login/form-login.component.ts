import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(){
    const User = Object.assign({}, this.formLogin.value);
    if (this.formLogin.valid) {
        debugger
        this.authService.signIn(User).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
          debugger
        },
        (err) => console.log(err),);
        this.formLogin.reset();
    }
  }


  showPassword () {

  }

}
