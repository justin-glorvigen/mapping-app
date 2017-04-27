import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { GridEntryComponent } from './building/grid-entry/grid-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    BuildingListComponent,
    GridEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
