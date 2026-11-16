import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
 DEFAULT_PRICE, DEFAULT_QUANTITY, DEFAULT_TVA, getDiscountRate,
} from './ttc-pricing';
@Component({
 selector: 'app-ttc-calculator',
 imports: [FormsModule, CurrencyPipe, PercentPipe],
 templateUrl: './ttc-calculator.html',
 styleUrl: './ttc-calculator.css',
})
export class TtcCalculator {
 // What the user types. A number input gives null when it is emptied, hence "number | null".
 protected readonly price = signal<number | null>(DEFAULT_PRICE);
 protected readonly quantity = signal<number | null>(DEFAULT_QUANTITY);
 protected readonly tva = signal<number | null>(DEFAULT_TVA);
 // What is calculated. Each formula only reads other signals, so it updates by itself.
 protected readonly unitTtc = computed(
 () => (this.price() ?? 0) * (1 + (this.tva() ?? 0) / 100),
 );
 protected readonly grossTotal = computed(
 () => this.unitTtc() * (this.quantity() ?? 0),
 );
 protected readonly discountRate = computed(
 () => getDiscountRate(this.quantity() ?? 0),
 );
 protected readonly discount = computed(
 () => this.grossTotal() * this.discountRate(),
 );
 protected readonly totalTtc = computed(
 () => this.grossTotal() - this.discount(),
 );
}
