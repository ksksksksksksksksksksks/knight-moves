import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  size = new FormControl(10, Validators.required);
  
  constructor(public modal: MatDialogRef<EditorComponent>/*, 
    @Inject(MAT_DIALOG_DATA) public data: any*/) { 
      //this.size.patchValue = data;
    }

  ngOnInit(): void {
  }

  close() {
    this.modal.close(this.size.value);
  }

}
