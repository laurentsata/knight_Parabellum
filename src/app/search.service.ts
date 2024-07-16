import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  getSearchResults(query: string): any[] {
    const data = [
      { section: 'section1', text: 'SIA', page: 'tuto' },
      { section: 'section2', text: 'Débuter le tir', page: 'tuto' },
      { section: 'section3', text: 'Technique de tir', page: 'tuto' },
      { section: 'section4', text: 'Reglage / Réglage lunette (tuto)', page: 'tuto' },
      { section: 'section5', text: 'Fonction armes', page: 'tuto' },
      { section: 'section6', text: 'Rechargement', page: 'tuto' },
      { section: 'section7', text: 'Poudre noire', page: 'tuto' },
      { section: 'section8', text: 'Entretien, nettoyage', page: 'tuto' },
      { section: 'section9', text: 'Essais armes', page: 'tuto' },
      { section: 'section10', text: 'Arbalète', page: 'tuto' },
      { section: 'section11', text: 'SIA pour les tireurs', page: 'news' },
      { section: 'section12', text: 'SIA foire aux questions', page: 'news' },
      { section: 'section17', text: 'Convertisseurs Grains, Grammes', page: 'balistique' },
      { section: 'section18', text: 'Clic,click, reglage lunette, réglage lunette', page: 'balistique' },
      { section: 'section19', text: 'Convertisseur MOA en MRAD', page: 'balistique' },
      { section: 'section20', text: 'Reglage /Réglage organes de visée (schémas)', page: 'balistique' },
 
    ];
    return data.filter(item => item.text.toLowerCase().includes(query.toLowerCase()));
  }
}