import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // Appel automatique de la fonction pour ouvrir la modal
    this.openModal('https://knightparabellum.000webhostapp.com/img/Affiche%20Diots%202024.jpg');
  }

  openModal(imageUrl: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      
      // data: { imageUrl: imageUrl }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
