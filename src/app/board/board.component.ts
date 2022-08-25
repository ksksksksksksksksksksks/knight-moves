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

  makeCurrent(cell: Cell) {
    cell.isClicked = true;
  }

  ngOnInit(): void {
  }

}
