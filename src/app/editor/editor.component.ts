import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from 'src/app/game.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  size = new FormControl('10');
  
  //size.value = this.gameService.messageFieldSize;
  constructor(public modal: MatDialogRef<EditorComponent>, private gameService: GameService) { }

  ngOnInit(): void {
    this.size.valueChanges.subscribe(
      (value) => console.log(value)
    );
  }

  public close() {
    this.modal.close(this.size.value);
  }

}
