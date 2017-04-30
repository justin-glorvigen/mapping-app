import { GridEntry } from './grid-entry';

export class Building{
    constructor(public name: string, public imageUrl: string, public description: string, public grid: GridEntry[][] = null){
    }
}