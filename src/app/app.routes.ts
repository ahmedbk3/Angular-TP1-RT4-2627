import { Routes } from '@angular/router';
// ---- Kiki's imports ----
import { ColorBox } from './features/color-box/color-box';
import { TtcCalculator } from './features/ttc-calculator/ttc-calculator';
// ---- Teammate's imports ----
export const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'color' },
 // ---- Kiki's routes (exercises 1, 2, 3, 5, 9) ----
 { path: 'color', component: ColorBox },
 { path: 'ttc', component: TtcCalculator },
 // ---- Teammate's routes (exercises 4, 6, 7, 8) ----
];
