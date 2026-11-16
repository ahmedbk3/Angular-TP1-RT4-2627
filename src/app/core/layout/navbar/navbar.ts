import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
/** One entry of the menu. */
interface NavLink {
 label: string;
 path: string;
}
@Component({
 selector: 'app-navbar',
 imports: [RouterLink, RouterLinkActive],
 templateUrl: './navbar.html',
 styleUrl: './navbar.css',
})
export class Navbar {
 protected readonly links: NavLink[] = [
 // ---- Kiki's links (exercises 1, 2, 3, 5, 9) ----
 { label: 'Color', path: '/color' },
 { label: 'TTC', path: '/ttc' },
 // ---- Teammate's links (exercises 4, 6, 7, 8) ----
 ];
}