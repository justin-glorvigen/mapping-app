import { Room } from './Room';

export class GridEntry{
    constructor(public locX: number, public locY: number, public isWalkable: boolean, public room: Room = null){}
}