import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent {

  blinkState: string = 'on';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Redirection vers l'accueil après 2.5 secondes
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2500);
  }

  // Met en place la logique pour changer l'état de clignotement et rediriger après 3 secondes
  startBlinking() {
    const blinkInterval = of(null).pipe(
      delay(1000), // Change l'état toutes les 1000 millisecondes (1 seconde)
    ).subscribe(() => {
      this.blinkState = this.blinkState === 'on' ? 'off' : 'on';
    });

  }
}
