import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


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
import { InfoModelComponent } from './components/info-model/info-model.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Model3dComponent } from './components/model3d/model3d.component';
import { ListModelComponent } from './components/listModel/listModel.component';
import { ModalCollectionComponent } from './components/modal-collection/modal-collection.component';
import { InfoModel3dComponent } from './components/info-model3d/info-model3d.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from '../app/guards/auth.guard';
import { TokeIntercerptorService } from './services/toke-intercerptor.service';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormForgotComponent,
    InfoUserComponent,
    HeaderLoginComponent,
    FormEditUserComponent,
    FormUploadDetailsComponent,
    InfoModelComponent,
    FormLoginComponent,
    HomeComponent,
    Model3dComponent,
    Error404Component,
    ListModelComponent,
    ModalCollectionComponent,
    InfoModel3dComponent,
    CategoryComponent,
    SearchComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeIntercerptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
