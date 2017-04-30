import { Component, OnInit } from '@angular/core';
import { BuildingListComponent } from './building-list/building-list.component';
import { Building } from "./Classes/Building";
import { Router } from "@angular/router";
import { AF } from "./providers/af";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean;

  ngOnInit(): void {

  }

  constructor(public afService: AF, private router: Router) {
    this.afService.af.auth.subscribe(
      (auth) => {
        if (auth == null){
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        }else{
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
   }

   logout(){
     this.afService.logout();
   }
}
