import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BoardComponent } from './board/board.component';
import { FieldSizeComponent } from './field-size/field-size.component';
import { GameResultComponent } from './game-result/game-result.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  messageResult: string = '';
  messageRestart: string = '';
  messageFieldSize: number = 10;


  addResult(message: string) {
    this.messageResult = message;
  }

  doRestart(message: string) {
    this.messageRestart = message;
  }

  setFieldSize(fieldSize: number) {
    this.messageFieldSize = fieldSize;
  }

  constructor() { }
}
