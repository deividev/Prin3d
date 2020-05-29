import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router'

import { AuthService  } from '../../services/auth.service'
import { Model3d } from 'src/app/models/model3d';
import { Model3dService } from 'src/app/services/model3d.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

@Input() infoUser= {};


  public modelsUser: Array<Model3d> = [];

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private model3dService: Model3dService) {
                this.model3dService.getModels().subscribe((result) => {
                  //Ordena el resultado de los mas votados de mayor a menor y coge los 8 primeros;
                  this.modelsUser = result.sort((a, b) => b.likes - a.likes).slice(0, 4);
                });
              }

  ngOnInit(): void {
    debugger
    const id = localStorage.getItem('user')
    this.infoUser = this.userService.getLoguedUser(id);
  }
  logout(){
    debugger
    this.authService.logout();
    this.router.navigate(['/home'])
    debugger
  }

}
