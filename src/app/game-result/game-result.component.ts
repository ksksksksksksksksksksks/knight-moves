import { Component, OnInit  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent  {

  constructor(public dialogRef: MatDialogRef<GameResultComponent>, private gameService: GameService) { 
  }

  resultMessage: string = this.gameService.messageResult;

  sendMessageRestart() {
    this.gameService.messageResult = 'yes';
    window.location.reload();
  }  
}
