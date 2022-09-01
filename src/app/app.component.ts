import { Component, ViewChild, OnInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditorComponent } from './editor/editor.component';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public matDialog: MatDialog, private gameService: GameService) { 
  }

  fieldSize: number = this.gameService.messageFieldSize;

  openModal3() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "window.screen.height";
    dialogConfig.width = "window.screen.width";
    const modalDialog = this.matDialog.open(EditorComponent, dialogConfig).afterClosed().subscribe(size => {
      this.gameService.messageFieldSize = size;
    });
  }

  @ViewChild(BoardComponent) child!: BoardComponent;

  takeStepBack() {
    this.child.stepBack(); 
  }

  restart() {
    this.child.restart(); 
  }

}
