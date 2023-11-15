// import { Component, OnInit } from '@angular/core';
// import { Router} from "@angular/router";

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent implements OnInit{

//   // constructor() { }
//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     document.getElementById("contactform")?.addEventListener("submit", (event: Event) => {
//       event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

//       const form = event.target as HTMLFormElement;
//       const formData = new FormData(form);

//       fetch(form.action, {
//         method: form.method,
//         body: formData
//       })
//       // .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         this.router.navigate(['/frame']).then(() => {
//           console.log('Navigated to the home page successfully');

//         });


//       })
//       .catch((error) => {
//         console.error('Error:', error);

//       });
//     });

//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.getElementById("contactform")?.addEventListener("submit", (event: Event) => {
      event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

      const form = event.target as HTMLFormElement;

      if (this.validateForm(form)) {
        const formData = new FormData(form);

        fetch(form.action, {
          method: form.method,
          body: formData
        })
        .then(data => {
          console.log('Success:', data);
          this.router.navigate(['/frame']).then(() => {
            console.log('Navigated to the home page successfully');
          });
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
    const hiddenImage = document.getElementById("hiddenImage") as HTMLImageElement;
    if (hiddenImage) {
      hiddenImage.style.display = "flex";
      hiddenImage.style.justifyContent = "center";
    }
    const contactForm= document.getElementById("contactform") as HTMLFormElement;
    if (contactForm) {
      contactForm.style.display = "none";
    }
    return true;
  }
}
