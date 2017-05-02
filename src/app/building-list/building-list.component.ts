import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BuildingComponent } from '.././building/building.component';

import { Building } from '../Classes/Building';
import { BuildingService } from "../Classes/building.service";
import { FirebaseListObservable } from "angularfire2";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  buildings: any[];
  constructor(private buildingService: BuildingService) {
  }

  ngOnInit() {
    this.buildingService.getBuildings().then((data) => {
      data.subscribe((buildings) => {
        this.buildings = buildings;
      });
    });
  }

}
