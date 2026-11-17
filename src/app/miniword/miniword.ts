import { NgStyle } from '@angular/common';
import { Component ,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-miniword',
  imports: [FormsModule,NgStyle],
  templateUrl: './miniword.html',
  styleUrl: './miniword.css',
})
export class Miniword {
  text = '';
  font = 'arial';
  @Input() color  = "#000000" ; 
  size = "10px" ; 
  changeSize(n:number)
  {
    if (Number.isFinite(n)) {
      this.size = n + "px";
    } 
  }
}
