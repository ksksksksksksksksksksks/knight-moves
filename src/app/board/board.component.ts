import { Component, OnInit } from '@angular/core';

interface Cell {
  i: number;
  j: number;
  isCurrent: boolean;
  isClicked: boolean;
  isAcess: boolean;
  step?: number;
}

function initCell(options?: Partial<Cell>): Cell {
  const defaults = {
    i: 1,
    j: 1,
    isCurrent: false,
    isClicked: false,
    isAcess: false,
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
    this.items = Array(10).fill(Array(10).fill({initCell}));
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
