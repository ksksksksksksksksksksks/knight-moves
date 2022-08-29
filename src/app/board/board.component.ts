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

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  
  fieldSize: number = 10;
  items: Cell[][];
  stepHistory: Cell[] = [];

  constructor() {
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items[i] = [];
      for (let j = 0; j < 10; j++) {
        this.items[i][j] = initCell({i, j});
      }
    }
    console.log(this.items);
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

    if (x + 2 < this.items.length && y - 1 >= 0 && !this.items[x + 2][y - 1].isClicked) {
      this.items[x + 2][y - 1].isAvailable = true;  
    }

    if (x + 2 < this.items.length && y + 1 < this.items.length && !this.items[x + 2][y + 1].isClicked) {
      this.items[x + 2][y + 1].isAvailable = true;  
    }

    if (x - 2 >= 0 && y - 1 >= 0 && !this.items[x - 2][y - 1].isClicked) {
      this.items[x - 2][y - 1].isAvailable = true;  
    }
    
    if (x - 2 >= 0 && y + 1 < this.items.length && !this.items[x - 2][y + 1].isClicked) {
      this.items[x - 2][y + 1].isAvailable = true;  
    }

    if (x + 1 < this.items.length && y + 2 < this.items.length && !this.items[x + 1][y + 2].isClicked) {
      this.items[x + 1][y + 2].isAvailable = true;  
    }

    if (x - 1 >= 0 && y + 2 < this.items.length && !this.items[x - 1][y + 2].isClicked) {
      this.items[x - 1][y + 2].isAvailable = true;  
    }

    if (x + 1 < this.items.length && y - 2 >= 0 && !this.items[x + 1][y - 2].isClicked) {
      this.items[x + 1][y - 2].isAvailable = true;  
    }
    
    if (x - 1 >= 0 && y - 2 >= 0 && !this.items[x - 1][y - 2].isClicked) {
      this.items[x - 1][y - 2].isAvailable = true;  
    }
  }
  
  makeCurrent(cell: Cell) {
    const x = cell.i;
    const y = cell.j;

    if (this.clickCount == 1 || this.items[x][y].isAvailable){
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

    this.stepHistory.push(cell);

    if (availableCount == 0 && clickedCount != (this.items.length * this.items.length)) {
      alert('You lose!');
    }
    
    if (this.items[x][y].isClicked && clickedCount == (this.items.length * this.items.length)) {
      alert('You are WINNER!');
    } 
  }

  stepBack() {
    let last = this.stepHistory.pop()
    if (typeof last != undefined) {
      (last as Cell).isClicked = false;
    }
    
    let current = this.stepHistory.pop();
    if (typeof current != undefined) {
      let cell = current as Cell;
      this.renderStep(cell.i, cell.j);
      this.makeCurrent(cell);
    }
  }

  restart() {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
