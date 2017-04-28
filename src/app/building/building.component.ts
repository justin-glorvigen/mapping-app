import { Component, OnInit, Input } from '@angular/core';
import { Building } from './Building';
import { GridEntry } from "./grid-entry";
import { GridService } from "./grid-service";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input('building') building: Building;

  constructor(private gridService: GridService) {
  }

  ngOnInit() {
    (<HTMLImageElement>document.getElementById('curr-building-img')).addEventListener('load', event => {
      this.building.grid = this.gridService.generateGrid(event, this.building);
    });
  }

  getBlockSize() {
    return this.gridService.getBlockSize();
  }

  getLeft(i: number) {
    return this.gridService.getLeft(i);
  }
  getTop(i: number) {
    return '-' + this.gridService.getTop(i);
  }
  getEntryStyle(gridEntry: GridEntry) {
    return {
      left: gridEntry.locX + 'px',
      top: gridEntry.locY + 'px'
    }
  }

    

}