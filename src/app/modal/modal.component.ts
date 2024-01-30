import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: {  }
  ) { }

  // // Fonction appelée lorsqu'on clique sur le bouton "Fermer"
  onNoClick(): void {
    this.dialogRef.close();
  }
}




