import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent {
distance!: number;
uniteMesure: string = 'metrique';
typeReglage!: string;
valeurReglage!: number;
correction!: number;
ecartACorriger!: number;
nombreClics!: number;

calculerCorrection(): void {
  if (this.uniteMesure === 'metrique') {
  //   this.calculerCorrectionMOA();
  // } else {
    this.calculerCorrectionMetrique();
  }
}

// calculerCorrectionMOA(): void {
//   const baseCorrection = this.distance / 100;

//   switch (this.typeReglage) {
//     case '1moa':
//       this.correction = baseCorrection * 1;
//       break;
//     case '1/2moa':
//       this.correction = baseCorrection * 0.5;
//       break;
//     case '1/4moa':
//       this.correction = baseCorrection * 0.25;
//       break;
//     case '1/8moa':
//       this.correction = baseCorrection * 0.125;
//       break;
//     default:
//       this.correction = 0;
//   }

//   this.calculerNombreClics();
// }

calculerCorrectionMetrique(): void {
  const baseCorrection = this.distance / 100;

  switch (this.typeReglage) {
    case '1moa':
      this.correction = baseCorrection * 2.908;
      break;
    case '1/2moa':
      this.correction = baseCorrection * 1.454;
      break;
    case '1/4moa':
      this.correction = baseCorrection * 0.727;
      break;
    case '1/8moa':
      this.correction = baseCorrection * 0.364;
      break;
    default:
      this.correction = 0;
  }

  this.calculerNombreClics();
}

calculerNombreClics(): void {
  this.nombreClics = this.ecartACorriger / this.correction;
}

}
