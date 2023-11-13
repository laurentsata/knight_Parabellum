import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    document.getElementById("contactform")?.addEventListener("submit", (event: Event) => {
      event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Vous pouvez ajouter ici des actions supplémentaires après l'envoi réussi
      })
      .catch((error) => {
        console.error('Error:', error);
        // Vous pouvez ajouter ici des actions en cas d'erreur d'envoi
      });
    });
  }
}


