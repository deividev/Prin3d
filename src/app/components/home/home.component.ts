import { Component, OnInit } from '@angular/core';

import { Model3d } from 'src/app/models/model3d';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Model3dService } from 'src/app/services/model3d.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public newModels: Array<Model3d> = [];
  public featuredModels: Array<Model3d> = [];

  public newTitle: string = "new";
  public featuredTitle: string = "featured";

  public user: User = null;
  constructor(
    private model3dService: Model3dService,
    private userService: UserService,

  ) {

  }
  ngOnInit(): void {
    this.model3dService.getModels().subscribe((result) => {
      //Ordena el resultado de los mas votados de mayor a menor y coge los 8 primeros;
      this.featuredModels = result.sort((a, b) => b.likes - a.likes).slice(0, 4);
      //Ordena el resultado de los ultimos 8 que se han subido a la base de datos;
      this.newModels = result.sort((a, b)  => b.createDate - a.createDate).slice(0, 8);
    });
  }

}
