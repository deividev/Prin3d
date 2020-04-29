import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { AuthService  } from '../../services/auth.service'

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/home'])
  }

}
