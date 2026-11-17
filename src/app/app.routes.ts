import { Routes } from '@angular/router';
import { ColorBox } from './features/color-box/color-box';
import { TtcCalculator } from './features/ttc-calculator/ttc-calculator';

export const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'color' },
 { path: 'color', component: ColorBox },
 { path: 'ttc', component: TtcCalculator },
];
