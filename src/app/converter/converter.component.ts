import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  grains!: number;
  grammes!: number;

  convertirEnGrammes() {
    // Conversion de grains en grammes (1 grain = 0.0648 grammes)
    this.grammes = this.grains * 0.0648;
  }

  convertirEnGrains() {
    // Conversion de grammes en grains (1 gramme = 15.4324 grains)
    this.grains = this.grammes * 15.4324;
  }

  reinitialiser() {
    // Réinitialiser les valeurs des champs de saisie à zéro
    this.grains = 0;
    this.grammes = 0;
  }
}
