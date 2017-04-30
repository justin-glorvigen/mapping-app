import { Component, OnInit, Input } from '@angular/core';
import { GridEntry } from "../../Classes/grid-entry";
import { GridService } from "../../Classes/grid.service";

@Component({
  selector: 'app-grid-entry',
  templateUrl: './grid-entry.component.html',
  styleUrls: ['./grid-entry.component.css']
})
export class GridEntryComponent implements OnInit {
  @Input('gridEntry') gridEntry: GridEntry;

  constructor(private gridService: GridService) { }

  ngOnInit() {
  }

  getBlockSize(){
    return this.gridService.getBlockSize();
  }

  handleMouseDown($event){
    if (this.gridEntry.isWalkable){
      this.gridService.startSelectingNonWalkingAreas();
    }else{
      this.gridService.startSelectingWalkingAreas();
    }
    this.gridService.handleMouseOver(this.gridEntry);
  }

  handleMouseUp($event){
    this.gridService.stopSelecting();
  }

  handleMouseOver($event){
    this.gridService.handleMouseOver(this.gridEntry);
  }

}
