import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  size = new FormControl('');
  
  constructor(public modal: MatDialogRef<EditorComponent>) { }

  ngOnInit(): void {
  }

  public close() {
    this.modal.close(this.size.value);
  }

}
