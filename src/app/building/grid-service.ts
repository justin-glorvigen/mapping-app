import { GridEntry } from './grid-entry';

export class GridService {
    private blockSize: number;
    public selectingWalkableSpace: boolean;

    constructor(){
        this.blockSize = 10;
        this.selectingWalkableSpace = false;
    }

    generateGrid(event, building): GridEntry[][] {
        let grid: GridEntry[][] = [[]];

        //Get size of grid
        var width = event.target.width;
        var height = event.target.height;
        console.log('Width: ' + width + ', Height: ' + height);

        for (var x = 0; x < width; x += this.blockSize) {
            let gridColumn: GridEntry[] = [];
            for (var y = 0; y < height; y += this.blockSize) {
                gridColumn.push(new GridEntry(x, y, false));
            }
            grid.push(gridColumn);
        }

        console.log('Grid generated with ' + grid.length + ' columns');
        return grid;
    }

    getLeft(i: number) {
        return i * this.blockSize + 'px';
    }
    getTop(i: number){
        return i * this.blockSize + 'px';
    }
    getBlockSize() {
        return this.blockSize + 'px';
    }

    getblockSize() {
        return this.blockSize;
    }
}