import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  // constructor() { }
  constructor(private router: Router) { }

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
        this.router.navigate(['/frame']).then(() => {
          console.log('Navigated to the home page successfully');

        });


      })
      .catch((error) => {
        console.error('Error:', error);

      });
    });
  }
}


