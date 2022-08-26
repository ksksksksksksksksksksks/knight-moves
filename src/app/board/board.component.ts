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
  items: Cell[][];

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

  returnCoordinates(a: number, b: number) {
    alert(a+1 + ',' + (b+1));
  }

  clickCount: number = 0;
  clicked(event: Event) {
    console.log(event);
    this.clickCount++;
  }

  stepCount: number = 1;

  makeCurrent(cell: Cell) {
    const x = cell.i;
    const y = cell.j;

    if (this.clickCount == 1 || this.items[x][y].isAvailable){

      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
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

  }

  showStep(cell: Cell) {
        
  }

  ngOnInit(): void {
  }

}
