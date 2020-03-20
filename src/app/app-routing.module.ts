import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { Model3dComponent } from './components/model3d/model3d.component';
import { InfoModelComponent } from './components/info-model/info-model.component';

const appRoutes: Routes = [
  {path: 'login', component: FormLoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'model/:modelId', component: Model3dComponent},
  {path: 'model/info', component: InfoModelComponent},
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
