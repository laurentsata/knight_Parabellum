// door.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent {
  currentIndex = 0;

  carouselItems = [
    { image: 'https://childbearing-discip.000webhostapp.com/gallery/IMG_20231106_185427.jpg' },
    { image: 'https://childbearing-discip.000webhostapp.com/gallery/IMG_20231106_185438.jpg' },
    { image: 'https://childbearing-discip.000webhostapp.com/gallery/IMG_20231106_185448.jpg' }
    // Ajoutez d'autres images au besoin
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }}
