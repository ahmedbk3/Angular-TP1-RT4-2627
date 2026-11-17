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
 { label: 'Color', path: '/color' },
 { label: 'TTC', path: '/ttc' },
 { label: 'CV', path: '/cv' },
 { label: 'Miniword', path: '/miniword' },
 ];
}
