
import { Component } from '@angular/core';

interface Option {
  description: string;
  isCorrect: boolean;
  selectedCorrectly?: boolean; // Nouvelle propriété pour suivre la sélection correcte
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  constructor() {
  
    this.resetSelectedCorrectness();
  }

  // Première question
  question1 =
    '1. Comment doit-on transporter une arme lors du déplacement entre son domicile et le stand de tir ?';
  options1: Option[] = [
    { description: 'Désapprovisionnée', isCorrect: true },
    { description: 'Soit démontée', isCorrect: true },
    { description: 'Dans une mallette ou une housse', isCorrect: true },
    {
      description:
        'Soit munie d’un dispositif rendant son utilisation immédiate impossible',
      isCorrect: true,
    },
    { description: 'Dans un holster', isCorrect: false },
    { description: 'Sur soi', isCorrect: false },
    { description: 'Chargée', isCorrect: false },
  ];
  selectedOptions1 = new Set<number>();

    // Deuxième question
  question2 =
    "2. Les munitions peuvent-elles être transportées dans la même malette que l'arme ?";
  options2: Option[] = [
    { description: 'Oui', isCorrect: false },
    { description: 'Non, mais dans une malette à part', isCorrect: true },
  ];
  selectedOptions2 = new Set<number>();

  // Troisième question
  question3 = '3. Arrivé au stand le tireur :';
  options3: Option[] = [
    {
      description: 'Sort l’arme de la mallette et l’apporte au pas de tir ?',
      isCorrect: false,
    },
    {
      description: 'Apporte la mallette au pas de tir avant de sortir l’arme ?',
      isCorrect: true,
    },
  ];
  selectedOptions3 = new Set<number>();

  // Quatrième question
  question4 = '4. Comment met-on son arme en sécurité ?';
  options4 : Option[]= [
    { description: 'En démontant la culasse ou le barillet', isCorrect: false },
    { description: 'En ôtant le chargeur et les munitions', isCorrect: true },
    {
      description: 'En ouvrant la culasse ou en basculant le barillet vidé',
      isCorrect: true,
    },
    {
      description:
        'En contrôlant visuellement et physiquement l’absence de munitions',
      isCorrect: true,
    },
    {
      description: 'En mettant dans la chambre un drapeau de sécurité',
      isCorrect: true,
    },
  ];
  selectedOptions4 = new Set<number>();

  // Cinquième question
  question5 = '5. Qu’appelle-t-on une arme approvisionnée ?';
  options5: Option[] = [
    { description: 'Une arme qui contient des munitions', isCorrect: true },
    { description: 'Une arme dont la culasse est fermée', isCorrect: false },
    { description: 'Une arme qui a le chien armé', isCorrect: false},
  ];
  selectedOptions5 = new Set<number>();

  // Sixième question
  question6 = '6. Qu’appelle-t-on une arme prête à tirer ?';
  options6: Option[] = [
    { description: 'Une arme approvisionnée', isCorrect: false },
    { description: 'Une arme dont la culasse est fermée', isCorrect: false },
    { description: 'Une arme dont toute action sur la queue de détente fait partir le coup', isCorrect: true},
  ];
  selectedOptions6 = new Set<number>();

   // Septième question
   question7 = '7. A priori, une arme doit-elle être considérée comme chargée ?';
   options7: Option[] = [
     { description: 'Oui', isCorrect: true },
     { description: 'Non', isCorrect: false },
   ];
   selectedOptions7 = new Set<number>();

    // Huitième question
    question8 = '8. Est-il possible pour un tireur de diriger son arme vers quelqu’un ?';
    options8: Option[] = [
      { description: 'Oui', isCorrect: false },
      { description: 'Non', isCorrect: true },
    ];
    selectedOptions8 = new Set<number>();

     // Neuvième question
  question9 = '9. Un tireur est-il autorisé à faire des simulacres de visée avec une arme, même vide ?';
  options9: Option[] = [
    { description: 'Vers quelqu’un', isCorrect: false },
    { description: 'Dans un endroit prévu à cet effet', isCorrect: true },
    { description: 'En direction du pas de tir ou des cibles, lorsqu’il n’y a personne', isCorrect: true},
    { description: 'En dehors des stands', isCorrect: false},
  ];
  selectedOptions9 = new Set<number>();

      // Dixième question
      question10 = '10. Un tireur arrête un instant de tirer, pour se reposer assis en arrière du pas de tir, l‘arme étant chargée, que doit-il faire ?';
      options10: Option[] = [
        { description: 'Mettre son arme en sécurité', isCorrect: true },
        { description: 'Démonter l’arme', isCorrect: true },
        { description: 'Laisser l’arme chargée sur la table de tir', isCorrect: false},
      ];
      selectedOptions10 = new Set<number>();

       // Onzième question
       question11 = '11. Pendant que d’autres tireurs sont aux cibles, qu’a le droit de faire un tireur resté au pas de tir ?';
       options11: Option[] = [
         { description: 'Régler son arme', isCorrect: false },
         { description: 'Laisser le chargeur engagé', isCorrect: false },
         { description: 'Manipuler son arme', isCorrect: false},
         { description: 'Ne pas toucher à son arme', isCorrect: true},
       ];
       selectedOptions11 = new Set<number>();

        // Douzième question
        question12 = '12. Le port de lunettes est-il ?';
        options12: Option[] = [
          { description: 'Obligatoire dans toutes les disciplines', isCorrect: false },
          { description: 'Recommandé dans toutes les disciplines', isCorrect: true },
          { description: 'Obligatoire dans certaines disciplines', isCorrect: true},
        ];
        selectedOptions12 = new Set<number>();

         // Treisième question
       question13 = '13. Lorsque l’arme chargée a un incident, un tireur peut-il  ?';
       options13: Option[] = [
         { description: 'Faire appel à un responsable du club sans quitter le poste de tir', isCorrect: true },
         { description: 'Réparer dans le stand en arrière du pas de tir', isCorrect: false },
         { description: 'Mettre l’arme en sécurité', isCorrect: true},
         { description: 'Réparer au pas de tir, le canon de l’arme face aux cibles ou labutte de tir', isCorrect: true},
       ];
       selectedOptions13 = new Set<number>();

        // Quatorzième question
        question14 = '14. Un tireur possède une arme soumise à autorisation de détention. Comment doit-il la stocker à son domicile ?';
        options14: Option[] = [
          { description: 'L’entreposer dans un coffre-fort ou une armoire forte ou une pièce forte', isCorrect: true },
          { description: 'La ranger assurée dans une mallette fermée à clef', isCorrect: false },
          { description: 'Stocker les munitions de l’arme soumise à autorisation dans le même coffre-fort, armoire forte ou pièce forte', isCorrect: false},
        ];
        selectedOptions14 = new Set<number>();

          // Quinzième question
       question15 = '15. Un tireur possède une arme soumise à déclaration ou enregistrement, comment doit-il la stocker à son domicile ? (3 possibilités)';
       options15: Option[] = [
         { description: 'La ranger assurée dans une mallette fermant à clé', isCorrect: false },
         { description: 'L’entreposer dans un coffre-fort ou une armoire forte ', isCorrect: true },
         { description: 'Démonter une pièce essentielle de l’arme la rendant inutilisable', isCorrect: true},
         { description: 'Utiliser un dispositif empêchant l’enlèvement de l’arme', isCorrect: true},
       ];
       selectedOptions15 = new Set<number>();

        // Seizième question
        question16 = '16. En quoi consiste l’action du lâcher ?';
        options16: Option[] = [
          { description: 'Appuyer sur la queue de détente', isCorrect: true },
          { description: 'Poser son arme sur la table de tir ', isCorrect: false },
        ];
        selectedOptions16 = new Set<number>();

         // Dix-septième question
         question17 = '17. Quelles sont les conséquences d’un mauvais lâcher ?';
         options17: Option[] = [
           { description: 'Enrayer l’arme', isCorrect: false },
           { description: 'Déstabilisation de l’arme', isCorrect: true },
           { description: 'Ne pas atteindre le point visé', isCorrect: true},
         ];
           selectedOptions17 = new Set<number>();

            // Dix-huitième question
       question18 = '18. Quels éléments faut-il aligner pour réaliser une visée correcte ?';
       options18: Option[] = [
         { description: 'Le guidon', isCorrect: true },
         { description: 'L’œil', isCorrect: true },
         { description: 'Le cran de mire', isCorrect: true},
         { description: 'La cible', isCorrect: true},
       ];
       selectedOptions18 = new Set<number>();

        // Dix-neuvième question
    question19 = '19. Faute pour l’œil de voir net simultanément à différentes distances, quel(s) élément(s) faut- il voir de façon nette ?';
    options19: Option[] = [
      { description: 'Le visuel de la cible', isCorrect: false },
      { description: 'La ligne de mire', isCorrect: true },
    ];
    selectedOptions19 = new Set<number>();

      // Vingtième question
      question20 = '20. Pour tirer plus à droite, dans quelle direction faut-il déplacer la hausse ?';
      options20: Option[] = [
        { description: 'À gauche', isCorrect: false },
        { description: 'À droite', isCorrect: true },
      ];
      selectedOptions20 = new Set<number>();
  // Autres questions et options (question2 à question6 et options2 à options6)

  totalErrorMessage = '';

  toggleSelection(optionIndex: number, questionNumber: number) {
    const selectedOptions = this.getSelectedOptions(questionNumber);
    if (selectedOptions.has(optionIndex)) {
      selectedOptions.delete(optionIndex);
    } else {
      selectedOptions.add(optionIndex);
    }
  }

  submitAll() {
    const totalCorrectAnswers = this.getTotalCorrectAnswers();
    const totalSelectedCorrectAnswers = this.getTotalSelectedCorrectAnswers();
  
    // Compter le nombre de mauvaises réponses
    let totalIncorrectAnswers = 0;
    [this.options1, this.options2, this.options3, this.options4, this.options5, this.options6].forEach((options, index) => {
      options.forEach((option, optionIndex) => {
        if (!option.isCorrect && this.getSelectedOptions(index + 1).has(optionIndex)) {
          totalIncorrectAnswers++;
        }
      });
    });
  
    const totalErrors = totalCorrectAnswers - totalSelectedCorrectAnswers + totalIncorrectAnswers;
    this.totalErrorMessage =
      totalErrors === 0 ? 'Tout juste !' : `Nombre d'erreurs : ${totalErrors}`;
  
    if (totalErrors > 0) {
      this.resetSelectedCorrectness();
      this.checkCorrectness(this.options1, this.selectedOptions1);
      this.checkCorrectness(this.options2, this.selectedOptions2);
      this.checkCorrectness(this.options3, this.selectedOptions3);
      this.checkCorrectness(this.options4, this.selectedOptions4);
      this.checkCorrectness(this.options5, this.selectedOptions5);
      this.checkCorrectness(this.options6, this.selectedOptions6);
      this.checkCorrectness(this.options7, this.selectedOptions7);
      this.checkCorrectness(this.options8, this.selectedOptions8);
      this.checkCorrectness(this.options9, this.selectedOptions9);
      this.checkCorrectness(this.options10, this.selectedOptions10);
      this.checkCorrectness(this.options11, this.selectedOptions11);
      this.checkCorrectness(this.options12, this.selectedOptions12);
      this.checkCorrectness(this.options13, this.selectedOptions13);
      this.checkCorrectness(this.options14, this.selectedOptions14);
      this.checkCorrectness(this.options15, this.selectedOptions15);
      this.checkCorrectness(this.options16, this.selectedOptions16);
      this.checkCorrectness(this.options17, this.selectedOptions17);
      this.checkCorrectness(this.options18, this.selectedOptions18);
      this.checkCorrectness(this.options19, this.selectedOptions19);
      this.checkCorrectness(this.options20, this.selectedOptions20);
    }
  }
  

  resetSelectedCorrectness() {
    this.options1.forEach(option => delete option.selectedCorrectly);
    this.options2.forEach(option => delete option.selectedCorrectly);
    this.options3.forEach(option => delete option.selectedCorrectly);
    this.options4.forEach(option => delete option.selectedCorrectly);
    this.options5.forEach(option => delete option.selectedCorrectly);
    this.options6.forEach(option => delete option.selectedCorrectly);
    this.options7.forEach(option => delete option.selectedCorrectly);
    this.options8.forEach(option => delete option.selectedCorrectly);
    this.options9.forEach(option => delete option.selectedCorrectly);
    this.options10.forEach(option => delete option.selectedCorrectly);
    this.options11.forEach(option => delete option.selectedCorrectly);
    this.options12.forEach(option => delete option.selectedCorrectly);
    this.options13.forEach(option => delete option.selectedCorrectly);
    this.options14.forEach(option => delete option.selectedCorrectly);
    this.options15.forEach(option => delete option.selectedCorrectly);
    this.options16.forEach(option => delete option.selectedCorrectly);
    this.options17.forEach(option => delete option.selectedCorrectly);
    this.options18.forEach(option => delete option.selectedCorrectly);
    this.options19.forEach(option => delete option.selectedCorrectly);
    this.options20.forEach(option => delete option.selectedCorrectly);
  }

  checkCorrectness(options: Option[], selectedOptions: Set<number>) {
    options.forEach((option, index) => {
      if (selectedOptions.has(index)) {
        option.selectedCorrectly = option.isCorrect;
      } else {
        option.selectedCorrectly = !option.isCorrect;
      }
    });
  }

  private getSelectedOptions(questionNumber: number): Set<number> {
    switch (questionNumber) {
      case 1:
        return this.selectedOptions1;
      case 2:
        return this.selectedOptions2;
      case 3: return this.selectedOptions3; 
      case 4: return this.selectedOptions4;
      case 5: return this.selectedOptions5;
      case 6: return this.selectedOptions6;
      case 7: return this.selectedOptions7;
      case 8: return this.selectedOptions8;
      case 9: return this.selectedOptions9;
      case 10: return this.selectedOptions10;
      case 11: return this.selectedOptions11;
      case 12: return this.selectedOptions12;
      case 13: return this.selectedOptions13;
      case 14: return this.selectedOptions14;
      case 15: return this.selectedOptions15;
      case 16: return this.selectedOptions16;
      case 17: return this.selectedOptions17;
      case 18: return this.selectedOptions18;
      case 19: return this.selectedOptions19;
      case 20: return this.selectedOptions20;
      default:
        return new Set<number>();
    }
  }

  private getTotalCorrectAnswers(): number {
    return (
      this.options1.filter((option) => option.isCorrect).length +
      this.options2.filter((option) => option.isCorrect).length +
      this.options3.filter((option) => option.isCorrect).length +
      this.options4.filter((option) => option.isCorrect).length +
      this.options5.filter((option) => option.isCorrect).length +
      this.options6.filter((option) => option.isCorrect).length +
      this.options7.filter((option) => option.isCorrect).length +
      this.options8.filter((option) => option.isCorrect).length +
      this.options9.filter((option) => option.isCorrect).length +
      this.options10.filter((option) => option.isCorrect).length +
      this.options11.filter((option) => option.isCorrect).length +
      this.options12.filter((option) => option.isCorrect).length +
      this.options13.filter((option) => option.isCorrect).length +
      this.options14.filter((option) => option.isCorrect).length +
      this.options15.filter((option) => option.isCorrect).length +
      this.options16.filter((option) => option.isCorrect).length +
      this.options17.filter((option) => option.isCorrect).length +
      this.options18.filter((option) => option.isCorrect).length +
      this.options19.filter((option) => option.isCorrect).length +
      this.options20.filter((option) => option.isCorrect).length
    );
  }

  private getTotalSelectedCorrectAnswers(): number {
    return (
      Array.from(this.selectedOptions1).filter(
        (index) => this.options1[index].isCorrect
      ).length +
      Array.from(this.selectedOptions2).filter(
        (index) => this.options2[index].isCorrect
      ).length +
      Array.from(this.selectedOptions3).filter(
        (index) => this.options3[index].isCorrect
      ).length +
      Array.from(this.selectedOptions4).filter(
        (index) => this.options4[index].isCorrect
        ).length +
      Array.from(this.selectedOptions5).filter(
        (index) => this.options5[index].isCorrect
      ).length +
      Array.from(this.selectedOptions6).filter(
        (index) => this.options6[index].isCorrect
      ).length +
      Array.from(this.selectedOptions7).filter(
        (index) => this.options7[index].isCorrect
      ).length +
      Array.from(this.selectedOptions8).filter(
        (index) => this.options8[index].isCorrect
      ).length +
      Array.from(this.selectedOptions9).filter(
        (index) => this.options9[index].isCorrect
        ).length +
      Array.from(this.selectedOptions10).filter(
        (index) => this.options10[index].isCorrect
      ).length +
      Array.from(this.selectedOptions11).filter(
        (index) => this.options11[index].isCorrect
      ).length +
      Array.from(this.selectedOptions12).filter(
        (index) => this.options12[index].isCorrect
        ).length +
      Array.from(this.selectedOptions13).filter(
        (index) => this.options13[index].isCorrect
      ).length +
      Array.from(this.selectedOptions14).filter(
        (index) => this.options14[index].isCorrect
      ).length +
      Array.from(this.selectedOptions15).filter(
        (index) => this.options15[index].isCorrect
        ).length +
      Array.from(this.selectedOptions16).filter(
        (index) => this.options16[index].isCorrect
      ).length +
      Array.from(this.selectedOptions17).filter(
        (index) => this.options17[index].isCorrect
      ).length +
      Array.from(this.selectedOptions18).filter(
        (index) => this.options18[index].isCorrect
        ).length +
      Array.from(this.selectedOptions19).filter(
        (index) => this.options19[index].isCorrect
      ).length +
      Array.from(this.selectedOptions20).filter(
        (index) => this.options20[index].isCorrect
      ).length
      
    );
  };
}

