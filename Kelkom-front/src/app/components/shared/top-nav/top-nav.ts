import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'top-nav',
  imports: [RouterLink],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {

  public menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
