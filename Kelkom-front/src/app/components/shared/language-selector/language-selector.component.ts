import { Component, HostListener, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'language-selector',
  standalone: true,
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit{
    private readonly translate = inject(TranslateService);

  languages = [
    { code: 'es', label: 'ES', flag: 'assets/media/images/flags/es.svg'  },
    { code: 'en', label: 'EN', flag: 'assets/media/images/flags/en.svg'  },
    { code: 'ca', label: 'CAT', flag: 'assets/media/images/flags/cat.svg'  },
  ];

  isOpen = false;
  currentLang = this.translate.currentLang || this.translate.getDefaultLang();
  currentLangIndex = 0;

  ngOnInit(): void {
  const savedLang = localStorage.getItem('lang') || 'en';

  this.translate.use(savedLang);
  this.currentLang = savedLang;

  this.currentLangIndex = this.languages.findIndex(
    l => l.code === savedLang
  );
}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  changeLang(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    this.isOpen = false;
    localStorage.setItem('lang', lang);

    this.currentLangIndex = this.languages.findIndex(
      l => l.code === lang
    );
  }

   get currentFlag(): string | undefined {
    return this.languages.find(l => l.code === this.currentLang)?.flag;
  }

  /** Cierra el menú al hacer click fuera */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.lang-selector')) {
      this.isOpen = false;
    }
  }
}
