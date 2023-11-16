import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

  animations: [
    trigger('blink', [
      state('on', style({ opacity: 1 })),
      state('off', style({ opacity: 0 })),
      transition('on <=> off', animate(500)),
    ]),
  ],
})
export class ContactComponent implements OnInit {

  blinkState: string = 'on';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startBlinking();


    document.getElementById("contactform")?.addEventListener("submit", (event: Event) => {
      event.preventDefault(); // Empêche le formulaire de se soumettre normalement

      const form = event.target as HTMLFormElement;

      if (this.validateForm(form)) {
        const formData = new FormData(form);

        fetch(form.action, {
          method: form.method,
          body: formData
        })
        .then(data => {
          console.log('Success:', data);
          this.showSuccessMessage();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    });
  }

  private validateForm(form: HTMLFormElement): boolean {
    const name = (form.querySelector("#name") as HTMLInputElement).value;
    const email = (form.querySelector("#email") as HTMLInputElement).value;
    const comment = (form.querySelector("#comment") as HTMLInputElement).value;

    if (name === "" || email === "" || comment === "") {
      alert("Veuillez remplir tous les champs obligatoires.");
      return false;
    }

    // masque le bouton Envoyer après la validation, le formulaire et affiche une image cachée:
    const submitButton = form.querySelector("#submitButton") as HTMLInputElement;
    if (submitButton) {
      submitButton.style.display = "none";
    }
    this.showHiddenImage();
    this.hideContactForm();
    return true;
  }

  private showHiddenImage() {
    const hiddenImageContainer = document.getElementById("hiddenImageContainer") as HTMLImageElement;
    if (hiddenImageContainer) {
      hiddenImageContainer.style.display = "flex";
      hiddenImageContainer.style.justifyContent = "center";
      hiddenImageContainer.style.alignItems = "center";
      hiddenImageContainer.style.margin = "auto";
      hiddenImageContainer.style.width = "50%";
      hiddenImageContainer.style.flexWrap = "wrap";
      hiddenImageContainer.style.flexDirection = "column";
    }
  }

  private hideContactForm() {
    const contactForm = document.getElementById("contactform") as HTMLFormElement;
    if (contactForm) {
      contactForm.style.display = "none";
    }
  }

  private showSuccessMessage() {
    this.router.navigate(['/frame']).then(() => {
      console.log('Navigated to the home page successfully');
    });
  }

  // Met en place la logique pour changer l'état de clignotement
  startBlinking() {
    setInterval(() => {
      this.blinkState = this.blinkState === 'on' ? 'off' : 'on';
    }, 1000); // Change l'état toutes les 1000 millisecondes (1 seconde)
  }


}
