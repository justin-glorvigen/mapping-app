import { Component, OnInit, Input } from '@angular/core';
import { GridEntry } from "app/building/gridEntry";

@Component({
  selector: 'app-grid-entry',
  templateUrl: './grid-entry.component.html',
  styleUrls: ['./grid-entry.component.css']
})
export class GridEntryComponent implements OnInit {
  @Input('gridEntry') gridEntry: GridEntry;

  constructor() { }

  ngOnInit() {
  }

}
