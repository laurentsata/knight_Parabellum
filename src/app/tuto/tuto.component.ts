// import { Component, OnInit } from '@angular/core';
// import { FragmentService } from '../fragment.service';
// import { SearchService } from '../search.service';

// @Component({
//   selector: 'app-tuto',
//   templateUrl: './tuto.component.html',
//   styleUrls: ['./tuto.component.scss']
// })

// export class TutoComponent implements OnInit {
//   isMenuOpen: boolean = false;
//   query: string = '';
//   results: any[] = [];
  
//   constructor(private searchService: SearchService,private fragmentService: FragmentService) { }

//   ngOnInit(): void {
//   }

//   toggleMenu(): void {
//     this.isMenuOpen = !this.isMenuOpen;
//   }
//   navigateToFragment(fragment: string): void {
//     this.fragmentService.navigateToFragment(fragment);
//   }

//   onSearch(): void {
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

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';
import { FragmentService } from '../fragment.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.scss']
})
export class TutoComponent implements OnInit {
  isMenuOpen: boolean = false;
  query: string = '';
  results: any[] = [];
  
  constructor(
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute,
    private fragmentService: FragmentService,
    private viewportScroller: ViewportScroller
  ) { }


  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
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
}
