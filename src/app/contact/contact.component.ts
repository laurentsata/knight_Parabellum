import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { debounceTime, delay } from 'rxjs/operators';
import { of } from 'rxjs';

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
  contactForm!: FormGroup;
  loading: boolean = false; // Ajout de la variable de chargement

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.loading = true; // Déclenche le spinner au début de la soumission du formulaire
      const formData = new FormData();
      for (const field in this.contactForm.value) {
        formData.append(field, this.contactForm.value[field]);
      }

      fetch('https://formsubmit.io/send/480446e2-9b53-48c7-b761-ef636abd7f48', {
        method: 'POST',
        body: formData,
      })
        .then((data) => {
          console.log('Success:', data);
          this.showSuccessMessage();
        })
        .catch((error) => {
          console.error('Error:', error);
          //meme que success car l'api de retourne riien avec formsbmit.io
          this.showSuccessMessage();
        });
    } else {
      alert('Veuillez remplir correstement tous les champs obligatoires.');
    }
  }


  private showSuccessMessage() {
    // delay avec un observable
    of(null)
      .pipe(delay(500))
      .subscribe(() => {
        this.router.navigate(['/validate']).then(() => {
          console.log('Navigation réussie vers la page d\'accueil');
        });
      });
  }

}
