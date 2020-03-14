import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoverComponent } from './components/cover/cover.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormForgotComponent } from './components/form-forgot/form-forgot.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { FormEditUserComponent } from './components/form-edit-user/form-edit-user.component';
import { FormUploadDetailsComponent } from './components/form-upload-details/form-upload-details.component';
import { CardComponent } from './components/card/card.component';
import { InfoModelComponent } from './components/info-model/info-model.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { Model3dComponent } from './components/model3d/model3d.component';
import { ListModelComponent } from './components/listModel/listModel.component';
import { ListBtnComponent } from './components/listBtn/listBtn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormForgotComponent,
    InfoUserComponent,
    ListBtnComponent,
    HeaderLoginComponent,
    FormEditUserComponent,
    FormUploadDetailsComponent,
    CardComponent,
    InfoModelComponent,
    FormLoginComponent,
    HomeComponent,
    Model3dComponent,
    Error404Component,
    ListModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
