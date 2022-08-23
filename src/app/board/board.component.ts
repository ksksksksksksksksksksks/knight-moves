import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  items

  constructor() {
    this.items = Array(10).fill(null)
  }

  ngOnInit(): void {
  }

}
