import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../Classes/Building';
import { GridEntry } from "../Classes/grid-entry";
import { GridService } from "../Classes/grid.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { BuildingService } from "../Classes/building.service";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  private building: Building;

  constructor(private gridService: GridService, private activatedRoute: ActivatedRoute, private router: Router, private buildingService: BuildingService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.populateData();
    }, 300);
  }

  populateData():void{
    this.activatedRoute.params.subscribe((params: Params) => {
      this.buildingService.getBuildings().then((data) => {
        data.subscribe((buildings) => {
          this.building = buildings[params['id']];
          setTimeout(() => {
            this.populateImg();
          }, 200);
          console.log('Building found: ' + this.building);
        });
      });
    });
  }

  populateImg(): void {
    (<HTMLImageElement>document.getElementById('curr-building-img')).addEventListener('load', event => {
      if (!this.building.grid) {
        this.building.grid = this.gridService.generateGrid(event, this.building);
      }
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