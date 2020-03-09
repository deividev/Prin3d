import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CoverComponent } from './shared/components/cover/cover.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { FormLoginComponent } from './shared/components/form-login/form-login.component';
import { FormRegisterComponent } from './shared/components/form-register/form-register.component';
import { FormForgotComponent } from './shared/components/form-forgot/form-forgot.component';
import { InfoUserComponent } from './shared/components/info-user/info-user.component';
import { CategoriesBtnComponent } from './shared/components/categories-btn/categories-btn.component';
import { HeaderLoginComponent } from './shared/components/header-login/header-login.component';
import { FormEditUserComponent } from './shared/components/form-edit-user/form-edit-user.component';
import { FormUploadDetailsComponent } from './shared/components/form-upload-details/form-upload-details.component';
import { CardComponent } from './shared/components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    CategoriesComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormForgotComponent,
    InfoUserComponent,
    CategoriesBtnComponent,
    HeaderLoginComponent,
    FormEditUserComponent,
    FormUploadDetailsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
