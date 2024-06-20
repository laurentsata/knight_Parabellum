// import { Component, OnInit } from '@angular/core';
//  import { MatDialog } from '@angular/material/dialog';
//  import { ModalComponent } from '../modal/modal.component';
//  import { SearchService } from '../search.service';

// @Component({
//   selector: 'app-accueil',
//   templateUrl: './accueil.component.html',
//   styleUrls: ['./accueil.component.scss']
// })
// export class AccueilComponent implements OnInit {

//   query: string = '';
//   results: any[] = [];

//    constructor(public dialog: MatDialog, private searchService: SearchService) { }

//    ngOnInit(): void {
//   //   // Appel automatique de la fonction pour ouvrir la modal
//      this.openModal('');
//   }

//    openModal(imageUrl: string): void {
//     const dialogRef = this.dialog.open(ModalComponent, {

//   //     // data: { imageUrl: imageUrl }
//      });

//      dialogRef.afterClosed().subscribe(result => {
//        console.log('The dialog was closed');
//      });
//    }

//    onSearch(): void {
//     if (this.query.length > 2) {
//       this.results = this.searchService.getSearchResults(this.query);
//     } else {
//       this.results = [];
//     }
//   }

//   scrollTo(id: string): void {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }

//  }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-accueil',
//   templateUrl: './accueil.component.html',
//   styleUrls: ['./accueil.component.scss']
// })
// export class AccueilComponent implements OnInit {
//   query: string = '';
//   results: any[] = [];

//   constructor(private router: Router) { }

//   ngOnInit(): void {}

//   onSearch(): void {
//     if (this.query.length > 2) {
//       // Replace this with the actual search logic
//       this.results = this.getSearchResults(this.query);
//     } else {
//       this.results = [];
//     }
//   }

//   getSearchResults(query: string): any[] {
//     const data = [
//       { id: 'section1', text: 'SIA' },
//       { id: 'section2', text: 'Débuter le tir' },
//       { id: 'section3', text: 'Technique de tir' },
//       { id: 'section4', text: 'Réglage lunette' },
//       { id: 'section5', text: 'Fonction armes' },
//       { id: 'section6', text: 'Rechargement' },
//       { id: 'section7', text: 'Poudre noire' },
//       { id: 'section8', text: 'Entretien' },
//       { id: 'section9', text: 'Essais armes' },
//       { id: 'section10', text: 'Arbalète' }
//     ];
//     return data.filter(item => item.text.toLowerCase().includes(query.toLowerCase()));
//   }

//   navigateToSection(id: string): void {
//     this.router.navigate(['/tuto'], { fragment: id });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  query: string = '';
  results: any[] = [];

  constructor(
    public dialog: MatDialog,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.openModal('');
  }

   openModal(imageUrl: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {

  //     // data: { imageUrl: imageUrl }
     });

     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
     });
   }



  onSearch(): void {
    if (this.query.length > 2) {
      this.results = this.searchService.getSearchResults(this.query);
    } else {
      this.results = [];
    }
  }

  // scrollTo(id: string): void {
  //   this.router.navigate(['/tuto'], { fragment: id });
  // }

  navigateTo(result: { section: string, text: string, page: string }): void {
    if (result.page === 'tuto') {
      this.router.navigate(['/tuto'], { fragment: result.section });
    } else if (result.page === 'news') {
      this.router.navigate(['/news'], { fragment: result.section });
    } else if (result.page === 'balistique') {
      this.router.navigate(['/balistique'], { fragment: result.section });
    }
  }


}
