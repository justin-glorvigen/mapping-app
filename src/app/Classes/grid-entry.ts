import { Room } from './room';

export class GridEntry{
    constructor(public locX: number, public locY: number, public isWalkable: boolean, public room: Room = null){}
}