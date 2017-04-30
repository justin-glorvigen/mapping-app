import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { Routes, RouterModule } from "@angular/router";

//Components
import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { GridEntryComponent } from './building/grid-entry/grid-entry.component';
import { LoginPageComponent } from './login-page/login-page.component';

//Services
import { GridService } from './Classes/grid.service';
import { BuildingService } from './Classes/building.service';
import { AF } from "./providers/af";

export const firebaseConfig = {
  apiKey: "AIzaSyCiKLvNq4eRFMhOGnSC5MkBtXqA1s44kEM",
  authDomain: "buildingapp-dcbff.firebaseapp.com",
  databaseURL: "https://buildingapp-dcbff.firebaseio.com",
  projectId: "buildingapp-dcbff",
  storageBucket: "buildingapp-dcbff.appspot.com",
  messagingSenderId: "664339274182"
};

const routes: Routes = [
  { path: '', component: BuildingListComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    BuildingListComponent,
    GridEntryComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [GridService, AF, BuildingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
