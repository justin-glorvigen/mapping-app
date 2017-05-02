import { Building } from "./Building";
import { AF } from '../providers/af';
import { Injectable } from "@angular/core";
import { FirebaseListObservable } from "angularfire2";
import { Observable } from "rxjs/Rx";

@Injectable()
export class BuildingService {
    private buildingDb: FirebaseListObservable<any>;
    private dbInitialized: boolean = false;

    constructor(private afService: AF) {
    }

    getBuildings(): Promise<FirebaseListObservable<any>>{
        return new Promise<FirebaseListObservable<any>>((resolve, reject) => {
            if (this.dbInitialized){
                resolve(this.buildingDb);
            }else{
                this.afService.af.auth.subscribe((auth) => {
                    console.log('Authorized as: ' + auth.uid);
                    this.buildingDb = this.afService.af.database.list(auth.uid);
                    this.dbInitialized = true;
                    resolve(this.buildingDb);
                });
            }
        });
    }

    saveChanges() {
        this.afService.af.database.list(this.afService.af.auth.getAuth().uid).update(this.buildingDb.$ref.ref.key, this.buildingDb);
    }

    addNewBuilding(name: string) {
        let newBldg = new Building(name, '', '');
        this.buildingDb.push(newBldg);
    }
}