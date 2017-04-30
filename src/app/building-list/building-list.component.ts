import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BuildingComponent } from '.././building/building.component';

import { Building } from '../Classes/Building';
import { BuildingService } from "../Classes/building.service";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  buildings: Building[];
  @Output() onBuildingSelected = new EventEmitter<{building: Building}>();

  constructor(private buildingService: BuildingService) {
    this.buildings = this.buildingService.getBuildings();
  }

  buildingSelected(building: Building){
    this.onBuildingSelected.emit({building: building});
  }

  ngOnInit() {
  }

}
