import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {



  formGroup: FormGroup;
  user: any;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

  }



  ngOnChanges(changes: SimpleChanges): void {
    // a la raul
    if (this.user) {
      this.formGroup = this.formBuilder.group({
        name: [this.user.name, [Validators.required, Validators.minLength(4)]],
        userName: [this.user.userName, [Validators.required, Validators.minLength(4)]],
        password: [this.user.password, [Validators.required, ]],
        passwordConfirm: [this.user.passwordConfirm, [Validators.required, ]],
        });
    } else {
      this.formGroup = this.formBuilder.group({
        name: [ "", [Validators.required, Validators.minLength(4)]],
        userName: [ "", [Validators.required, Validators.minLength(4)]],
        password: [ "", [Validators.required, ]],
        passwordConfirm: [ "", [Validators.required, ]],
      });
    }
  }


  onSave(form) {
    debugger
    const update = Object.assign({}, this.user, form.value);
   debugger
    // form.reset();
  }

}
