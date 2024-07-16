import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
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
  isMenuOpen: boolean = false;

  constructor(
    private searchService: SearchService,
    private router: Router,
    public pwaInstallService: PwaInstallService,
    private networkService: NetworkService
  ) {}

  ngOnInit(): void {
    this.networkService.isOnline$.subscribe((online) => {
      this.isOnline = online;
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

  openVideoWindow(videoUrl: string): void {
    const width = 560;
    const height = 315;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    window.open(videoUrl, '_blank', `width=${width},height=${height},top=${top},left=${left}`);
  }
}
