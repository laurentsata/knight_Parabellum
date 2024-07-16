import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';
import { FragmentService } from '../fragment.service';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.scss']
})
export class TutoComponent implements OnInit, AfterViewInit {
  isMenuOpen: boolean = false;
  query: string = '';
  results: any[] = [];
  
  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute,
    private fragmentService: FragmentService
  ) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  ngAfterViewInit() {
    const thumbnails = document.querySelectorAll('.video-thumbnail');
    const modal = document.getElementById('video-modal') as HTMLElement;
    const videoFrame = document.getElementById('video-frame') as HTMLIFrameElement;
    const closeBtn = document.querySelector('.close') as HTMLElement;

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const videoUrl = thumbnail.getAttribute('data-video');
        if (videoUrl) {
          videoFrame.src = videoUrl;
          modal.style.display = 'flex';
        }
      });
    });

    closeBtn.addEventListener('click', () => {
      this.closeModalTuto();
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        this.closeModalTuto();
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToFragment(fragment: string): void {
    this.router.navigate(['/tuto'], { fragment: fragment }).then(() => {
      this.scrollToFragment(fragment);
    });
  }

  private scrollToFragment(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navigateFragment(fragment: string): void {
    this.fragmentService.navigateToFragment(fragment);
  }

  onSearch(): void {
    if (this.query.length > 2) {
      this.results = this.searchService.getSearchResults(this.query);
    } else {
      this.results = [];
    }
  }

  closeModalTuto(): void {
    const modal = document.getElementById('video-modal') as HTMLElement;
    const videoFrame = document.getElementById('video-frame') as HTMLIFrameElement;
    modal.style.display = 'none';
    videoFrame.src = ''; // Stoppe la lecture de la vidéo
  }
}
