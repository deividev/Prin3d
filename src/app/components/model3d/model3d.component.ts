import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model3d } from 'src/app/models/model3d';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Model3dService } from 'src/app/services/model3d.service';

@Component({
  selector: 'app-model3d',
  templateUrl: './model3d.component.html',
  styleUrls: ['./model3d.component.scss']
})
export class Model3dComponent implements OnInit {
  public model3d: Model3d = null;
  public user: User = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private model3dService: Model3dService,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.model3dService.getModels().subscribe((result) => {
        this.model3d = result;
        // this.userService.getUserByIdMock(userId).subscribe((result) => {
        //   this.user = result;
        // });

      });

    });

  }

}
