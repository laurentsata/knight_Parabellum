import { Component } from '@angular/core';

@Component({
  selector: 'app-angle',
  templateUrl: './angle.component.html',
  styleUrls: ['./angle.component.scss']
})
export class AngleComponent {

  mradValue!: number;
  moaValue!: number;

  convertToMOA() {
    // Conversion de milliradians en minutes d'angle
    this.moaValue = this.mradValue * 3.4377492368197;
  }

  convertToMRAD() {
    // Conversion de minutes d'angle en milliradians
    this.mradValue = this.moaValue /3.4377492368197;
  }

  resetValues() {
    // Réinitialiser les valeurs à zéro
    this.mradValue = 0;
    this.moaValue = 0;
  }
}
