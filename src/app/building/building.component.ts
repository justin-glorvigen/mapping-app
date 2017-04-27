import { Component, OnInit, Input } from '@angular/core';
import { Building } from './Building';
import { GridEntry } from "app/building/gridEntry";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input('building') building: Building;
  blockSize: number = 10;

  getblockSize(){
    return this.blockSize;
  }

  constructor() {
  }

  ngOnInit() {
    (<HTMLImageElement>document.getElementById('curr-building-img')).addEventListener('load', event => {
      this.generateGrid(event);
    });
  }

  generateGrid(event) {
    if (!this.building.grid) {
      let grid: GridEntry[][] = [[]];

      //Get size of grid
      var width = event.target.width;
      var height = event.target.height;
      console.log('Width: ' + width + ', Height: ' + height);

      for (var x = 0; x < width; x += this.blockSize){
        let gridColumn: GridEntry[] = [];
        for (var y = 0; y < height; y += this.blockSize){
          gridColumn.push(new GridEntry(x, y, false));
        }
        grid.push(gridColumn);
      }

      this.building.grid = grid;
      console.log('Grid generated with ' + this.building.grid.length + ' columns');
    }
  }

  getLeft(i: number){
    return i * this.blockSize + 'px';
  }
  getBlockSize(){
    return this.blockSize + 'px';
  }

}
