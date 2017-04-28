import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BuildingComponent } from '.././building/building.component';

import { Building } from '.././building/Building';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  buildings: Building[];
  @Output() onBuildingSelected = new EventEmitter<{building: Building}>();

  constructor() {
    this.buildings = [
      new Building('Test', 'http://localhost:4200/assets/image.jpg', 'Test Building')
    ];
  }

  buildingSelected(building: Building){
    this.onBuildingSelected.emit({building: building});
  }

  ngOnInit() {
  }

}
