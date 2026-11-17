import { Component, signal } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { DetailCv } from '../detail-cv/detail-cv';
import { ListeCv } from '../liste-cv/liste-cv';

@Component({
  selector: 'app-cv',
  imports: [DetailCv, ListeCv],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
  readonly personnes = [
    new Personne(1, 'Doe', 'John', 30, 'images/rotating_card_profile3.png', 123456789, 'CEO'),
    new Personne(2, 'Ben Ali', 'Amine', 28, 'images/rotating_card_profile.png', 21000002, 'Développeur web'),
    new Personne(3, 'Mansour', 'Inès', 32, 'images/rotating_card_profile2.png', 21000003, 'Designer UX'),
    new Personne(4, 'Trabelsi', 'Sarah', 29, 'images/sarah-trabelsi.svg', 21000004, 'Cheffe de projet'),
  ];
  readonly selection = signal<Personne | null>(null);
}
