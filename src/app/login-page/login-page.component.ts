import { Component, OnInit } from '@angular/core';
import { AF } from '../providers/af';
import { Router } from '@angular/router';
import { BuildingService } from "../Classes/building.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public afService: AF, private router: Router, private buildingService: BuildingService) { }

  ngOnInit() {
  }

  login(){
    this.afService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    });
  }

}
