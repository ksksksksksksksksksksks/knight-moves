import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  size = new FormControl('10', Validators.required);
  
  constructor(public modal: MatDialogRef<EditorComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.modal.close(this.size.value);
  }

}
