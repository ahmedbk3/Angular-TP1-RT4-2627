import { Component, Input, output } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { ItemCv } from '../item-cv/item-cv';

@Component({
  selector: 'app-liste-cv',
  imports: [ItemCv],
  templateUrl: './liste-cv.html',
  styleUrl: './liste-cv.css',
})
export class ListeCv {
  @Input({ required: true }) personnes: Personne[] = [];
  readonly selection = output<Personne>(); 
}
