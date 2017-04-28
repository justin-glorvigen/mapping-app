import { Component, OnInit, Input } from '@angular/core';
import { GridEntry } from "./../grid-entry";
import { GridService } from "./../grid-service";

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

  handleMouseOver($event){
    if (this.gridService.selectingWalkableSpace){
      this.gridEntry.isWalkable = true;
    }
  }

}
