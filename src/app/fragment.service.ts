import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  constructor(private router: Router) { }

  navigateToFragment(fragment: string): void {
    const url = this.router.url.split('#')[0]; // Obtenir l'URL actuelle sans le fragment
    const newUrl = `${url}#${fragment}`; // Ajouter le fragment à l'URL actuelle
    window.location.href = newUrl; // Rediriger vers la nouvelle URL avec le fragment
  }
}
