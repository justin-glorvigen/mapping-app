import { Component, OnInit } from '@angular/core';
import { BuildingListComponent } from './building-list/building-list.component';
import { Building } from "./Classes/Building";
import { Router } from "@angular/router";
import { AF } from "./providers/af";
import { BuildingService } from "./Classes/building.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean;

  ngOnInit(): void {
  }

  constructor(public afService: AF, private router: Router, private buildingService: BuildingService) {
    this.afService.af.auth.subscribe(
      (auth) => {
        if (auth == null){
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        }else{
          this.isLoggedIn = true;
          this.router.navigate(['']);
          this.buildingService.setAccountId(auth.uid);
        }
      }
    );
   }

   addBuilding(){
     let buildingName = prompt('Enter building name', 'building name...');
     if (buildingName && buildingName != ''){
       this.buildingService.addNewBuilding(buildingName);
      //  this.router.navigate(['buildling', this.buildingService.buildingFirebaseDB.length - 1]);
     }
   }

   logout(){
     this.afService.logout();
   }
}
