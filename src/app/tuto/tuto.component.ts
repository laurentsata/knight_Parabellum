import { Component, OnInit } from '@angular/core';
import { FragmentService } from '../fragment.service';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.scss']
})

export class TutoComponent implements OnInit {
  isMenuOpen: boolean = false;
  
  constructor(private fragmentService: FragmentService) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  navigateToFragment(fragment: string): void {
    this.fragmentService.navigateToFragment(fragment);
  }

}