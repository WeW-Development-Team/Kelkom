import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from "../language-selector/language-selector.component";

@Component({
  selector: 'top-nav',
  imports: [RouterLink, TranslateModule, RouterLinkActive, LanguageSelectorComponent],
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
