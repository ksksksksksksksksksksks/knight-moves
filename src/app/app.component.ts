import { Component, ViewChild } from '@angular/core';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(BoardComponent) child!: BoardComponent;

  takeStepBack() {
    this.child.stepBack(); 
  }

  restart() {
    this.child.restart(); 
  }

}
