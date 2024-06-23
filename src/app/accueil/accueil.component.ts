import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { PwaInstallService } from '../services/pwa-install.service';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  query: string = '';
  results: any[] = [];
  isOnline: boolean = true;

  constructor(
    public dialog: MatDialog,
    private searchService: SearchService,
    private router: Router,
    public pwaInstallService: PwaInstallService,
    private networkService: NetworkService // Import NetworkService here
  ) {}

  ngOnInit(): void {
    // this.openModal('');
    // console.log('AccueilComponent initialized');

    // this.networkService.isOnline$.subscribe((online) => {
    //   this.isOnline = online;
    // });
  }

  openModal(imageUrl: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {});

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

  navigateTo(result: { section: string, text: string, page: string }): void {
    if (result.page === 'tuto') {
      this.router.navigate(['/tuto'], { fragment: result.section });
    } else if (result.page === 'news') {
      this.router.navigate(['/news'], { fragment: result.section });
    } else if (result.page === 'balistique') {
      this.router.navigate(['/balistique'], { fragment: result.section });
    }
  }

  installPwa(): void {
    this.pwaInstallService.promptInstall();
  }

  rejectPwa(): void {
    this.pwaInstallService.rejectInstall();
  }
}
