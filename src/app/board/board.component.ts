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

  makeCurrent(cell: Cell) {
    const a = cell.i;
    const b = cell.j;

    if (this.clickCount == 1 || this.items[a][b].isAvailable == true){

      for (let i = 0; i < 10; i++) {
        this.items[i] = [];
        for (let j = 0; j < 10; j++) {
          this.items[i][j] = initCell({i, j});
        }
      }
  
      const x = cell.i;
      const y = cell.j;
      this.items[x][y].isClicked = true;
  
      if (x + 2 < this.items.length && y - 1 >= 0) {
        const x = cell.i + 2;
        const y = cell.j - 1;
        this.items[x][y].isAvailable = true;  
      }
  
      if (x + 2 < this.items.length && y + 1 < this.items.length) {
        const x = cell.i + 2;
        const y = cell.j + 1;
        this.items[x][y].isAvailable = true;  
      }
  
      if (x - 2 >= 0 && y - 1 >= 0) {
        const x = cell.i - 2;
        const y = cell.j - 1;
        this.items[x][y].isAvailable = true;  
      }
      
      if (x - 2 >= 0 && y + 1 < this.items.length) {
        const x = cell.i - 2;
        const y = cell.j + 1;
        this.items[x][y].isAvailable = true;  
      }
  
      if (x + 1 < this.items.length && y + 2 < this.items.length) {
        const x = cell.i + 1;
        const y = cell.j + 2;
        this.items[x][y].isAvailable = true;  
      }
  
      if (x - 1 >= 0 && y + 2 < this.items.length) {
        const x = cell.i - 1;
        const y = cell.j + 2;
        this.items[x][y].isAvailable = true;  
      }
  
      if (x + 1 < this.items.length && y - 2 >= 0) {
        const x = cell.i + 1;
        const y = cell.j - 2;
        this.items[x][y].isAvailable = true;  
      }
      
      if (x - 1 >= 0 && y - 2 >= 0) {
        const x = cell.i - 1;
        const y = cell.j - 2;
        this.items[x][y].isAvailable = true;  
      }
    }

  }

  makeAvailable(cell: Cell) {
  }

  ngOnInit(): void {
  }

}
