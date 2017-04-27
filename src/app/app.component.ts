import { Component, OnInit } from '@angular/core';
import { BuildingListComponent } from './building-list/building-list.component';
import { Building } from "app/building/Building";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.viewStates.push('building-list');
  }

  viewStates: string[] = [];
  selectedBuilding: Building;

  getCurrentViewState(): string {
    return this.viewStates[this.viewStates.length - 1];
  }
  loadPreviousViewState() {
    this.viewStates.pop();
  }
  selectBuilding(event) {
    this.selectedBuilding = event.building;
    this.viewStates.push('building');
  }


  constructor() { }
}
