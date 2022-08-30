import { Component, OnInit } from '@angular/core';

interface Cell {
  i: number;
  j: number;
  isCurrent: boolean;
  isClicked: boolean;
  isAvailable: boolean;
  step?: number;
}

function initCell(options?: Partial<Cell>): Cell {
  const defaults = {
    i: 1,
    j: 1,
    isCurrent: false,
    isClicked: false,
    isAvailable: false,
  };

  return {
    ...defaults,
    ...options,
  };
}

let coeff: [number, number][] = [
[2, -1],
[2, 1],
[-2, -1],
[-2, 1],
[1, 2],
[-1, 2],
[1, -2],
[-1, -2],
];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  
  fieldSize: number = 10;
  items: Cell[][];
  stepHistory: Cell[] = [];

  /*setField5() {
    this.fieldSize = 5;
  }*/

  constructor() {
    this.items = [];
    for (let i = 0; i < this.fieldSize; i++) {
      this.items[i] = [];
      for (let j = 0; j < this.fieldSize; j++) {
        this.items[i][j] = initCell({i, j});
      }
    }
    console.log(this.items);
    
    //this.items = Array(this.fieldSize).fill(Array(this.fieldSize).fill({initCell}));
  }

  clickCount: number = 0;
  clicked(event: Event) {
    console.log(event);
    this.clickCount++;
  }

  stepCount: number = 1;

  renderStep(x: number, y: number) {
    for (let i = 0; i < this.fieldSize; i++) {
      for (let j = 0; j < this.fieldSize; j++) {
        this.items[i][j].isCurrent = false;
        this.items[i][j].isAvailable = false;
      }
    }

    this.items[x][y].isCurrent = true;
    this.items[x][y].isClicked = true;
    this.items[x][y].step = this.stepCount++;

    for (let i = 0; i < coeff.length; i++) {
      for (let j = 0; j < 1; j++) {
        if ((x + coeff[i][j] < this.items.length && x + coeff[i][j] >= 0) && (y + coeff[i][j + 1] < this.items.length && y + coeff[i][j + 1] >= 0)
        && !this.items[x + coeff[i][j]][y + coeff[i][j + 1]].isClicked) {
          this.items[x + coeff[i][j]][y + coeff[i][j + 1]].isAvailable = true;
          console.log(x + coeff[i][j],y + coeff[i][j + 1]);
        }
      }
    }

  }
  
  makeCurrent(cell: Cell) {
    const x = cell.i;
    const y = cell.j;

    if (this.clickCount == 1 || this.items[x][y].isAvailable){
      this.stepHistory.push(cell);
      this.renderStep(x, y);
    }

    let availableCount = 0;
    let clickedCount = 0;
    
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.items[i][j].isAvailable) {
          availableCount++;
        }
        if (this.items[i][j].isClicked) {
          clickedCount++;
        }
      }  
    }

    if (availableCount == 0 && clickedCount != (this.items.length * this.items.length)) {
      alert('You lose!');
    }
    
    if (this.items[x][y].isClicked && clickedCount == (this.items.length * this.items.length)) {
      alert('You are WINNER!');
    } 
  }

  stepBack() {
    if (this.stepHistory.length > 1){
      let last = this.stepHistory.pop();
      
      if (last) {
        (last as Cell).isClicked = false;
        delete last.step;
      }
      
      let current = this.stepHistory.pop();
      
      if (current) {
        let currentCell = current as Cell;
        this.stepCount = currentCell.step as number;
        this.renderStep(currentCell.i, currentCell.j);
        this.makeCurrent(currentCell);
        this.stepHistory.push(currentCell);
      }
    }
  }

  restart() {
    this.items = [];
    for (let i = 0; i < this.fieldSize; i++) {
      this.items[i] = [];
      for (let j = 0; j < this.fieldSize; j++) {
        this.items[i][j] = initCell({i, j});
        console.log(this.items[i][j])
      }
    } 
    
    this.clickCount = 0;
    this.stepCount = 1;
    this.stepHistory = [];
  }

  ngOnInit(): void {
  }

}
