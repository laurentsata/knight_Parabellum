import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isLinkActive(routePath: string): boolean {
    return this.router.url === routePath;
  }
}
