import { Building } from "./Building";

export class BuildingService {
    private buildings: Building[] = [
      new Building('Test', 'http://localhost:4200/assets/image.jpg', 'Test Building')
    ];

    getBuildings() {
        return this.buildings.slice();
    }

    getBuildingByIndex(index:number){
        return this.buildings[index];
    }
}