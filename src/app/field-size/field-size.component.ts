import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardComponent } from 'src/app/board/board.component';
import { GameService } from 'src/app/game.service';

import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-field-size',
  templateUrl: './field-size.component.html',
  styleUrls: ['./field-size.component.css']
})
export class FieldSizeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FieldSizeComponent>, private gameService: GameService) { 
  }


  //@ViewChild(BoardComponent) child!: BoardComponent;

  setFieldSize5() {
    this.gameService.messageFieldSize = 5;
    alert(this.gameService.messageFieldSize);
  }

  setFieldSize8() {
    this.gameService.messageFieldSize = 8;
    alert(this.gameService.messageFieldSize);
  }
  
  setFieldSize10() {
    this.gameService.messageFieldSize = 10;
    alert(this.gameService.messageFieldSize);
  }

  ngOnInit(): void {
  } 
  

}
