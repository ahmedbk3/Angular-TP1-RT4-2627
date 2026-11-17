import { Component, input } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-detail-cv',
  imports: [],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css',
})
export class DetailCv {
  readonly personne = input.required<Personne>();
}
