import { Component, signal } from '@angular/core';
@Component({
 selector: 'app-color-box',
 templateUrl: './color-box.html',
 styleUrl: './color-box.css',
})
export class ColorBox {
 /** Color typed by the user. '' means "no color typed", so the CSS default color is used. */
 protected readonly color = signal('');
 protected onColorTyped(value: string): void {
 this.color.set(value.trim());
 }
 protected reset(input: HTMLInputElement): void {
 this.color.set('');
 input.value = ''; // also clear what is written in the input box
 }
}
