import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router'

import { AuthService  } from '../../services/auth.service'
import { Model3d } from 'src/app/models/model3d';
import { Model3dService } from 'src/app/services/model3d.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

@Input() public infoUser: User;

image: File;
imageSelected: string | ArrayBuffer;

public modelsUser: Array<Model3d> = [];

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private model3dService: Model3dService) {
                this.model3dService.getModels().subscribe((res) => {
                  const id = localStorage.getItem('user')
                  this.modelsUser = this.getFilteredModelsById(res, id)
                  console.log(this.modelsUser);
                });
              }

  ngOnInit(): void {
    const id = localStorage.getItem('user')
    this.userService.getLoguedUser(id).subscribe((res) => {
      this.infoUser = res;
      console.log(this.infoUser);
    });
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/home'])
  }

  changeFile(event) {

    if (event.target.files.length > 0) {
      this.image = <File>event.target.files[0];
      //Image preview
      // this.userService.updateUser(id)
      const reader = new FileReader();
      reader.onload = e => this.imageSelected = reader.result;
      reader.readAsDataURL(this.image);
    }
  }


  getFilteredModelsById(res, id) {
    return res.filter(function(e) {
      return e.userId == id;
    })
  }
}
