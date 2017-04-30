import { Building } from "./Building";
import { AF } from '../providers/af';
import { Injectable } from "@angular/core";
import { FirebaseListObservable } from "angularfire2";

@Injectable()
export class BuildingService {
    private acctId: string;
    // = [new Building('Test', 'http://localhost:4200/assets/image.jpg', 'Test Building')];
    public buildings: any[];
    public buildingFirebaseDB: FirebaseListObservable<any>;

    constructor(private afService: AF){}

    getBuildingByIndex(index:number){
        return this.buildings[index];
    }

    setAccountId(acctId: string){
        this.acctId = acctId;
        this.downloadBuildings();
    }

    downloadBuildings(){
        this.buildingFirebaseDB = this.afService.af.database.list(this.acctId);
        this.buildingFirebaseDB.subscribe((data) =>{
            this.buildings = data;
        });
    }

    saveChanges(){
        this.buildingFirebaseDB.update(this.buildingFirebaseDB.$ref.ref.key, this.buildings);
    }

    addNewBuilding(name: string){
        let newBldg = new Building(name, '', '');
        this.buildingFirebaseDB.push(newBldg);
    }
}