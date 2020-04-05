import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { InfoModelComponent } from './components/info-model/info-model.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormUploadDetailsComponent } from './components/form-upload-details/form-upload-details.component';
import { FormEditUserComponent } from './components/form-edit-user/form-edit-user.component';
import { InfoUserComponent } from './components/info-user/info-user.component';

const appRoutes: Routes = [
  {path: 'login', component: FormLoginComponent},
  {path: 'register', component: FormRegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'model/:modelId', component: InfoModelComponent},
  {path: 'upload', component: FormUploadDetailsComponent},
  {path: 'editUser', component: FormEditUserComponent},
  {path: 'user/:id', component: InfoUserComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
