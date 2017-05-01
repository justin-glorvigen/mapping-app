import { Building } from "./Building";
import { AF } from '../providers/af';
import { Injectable } from "@angular/core";
import { FirebaseListObservable } from "angularfire2";

@Injectable()
export class BuildingService {
    // = [new Building('Test', 'http://localhost:4200/assets/image.jpg', 'Test Building')];
    private buildingFirebaseDB: FirebaseListObservable<any>;

    constructor(private afService: AF) {
    }

    getBuildings(){
        this.afService.af.auth.subscribe((auth) => {
            console.log('initialized db');
            return this.afService.af.database.list(auth.uid);
        });
    }

    getBuildingByIndex(index: number): any {
        return this.buildingFirebaseDB.subscribe((data) => {
            return data[index];
        });
    }

    saveChanges() {
        this.buildingFirebaseDB.update(this.buildingFirebaseDB.$ref.ref.key, this.buildingFirebaseDB);
    }

    addNewBuilding(name: string) {
        let newBldg = new Building(name, '', '');
        this.buildingFirebaseDB.push(newBldg);
    }
}