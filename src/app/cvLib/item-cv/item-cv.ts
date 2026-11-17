import { Component, input, output } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-item-cv',
  imports: [],
  templateUrl: './item-cv.html',
  styleUrl: './item-cv.css',
})
export class ItemCv {
  readonly personne = input.required<Personne>();
  readonly selection = output<Personne>();
}
