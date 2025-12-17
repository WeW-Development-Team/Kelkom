import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/shared/footer/footer";
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Kelkom  Games');
  private readonly translate = inject(TranslateService);
  

  constructor(){
    const browserLang = navigator.language.split('-')[0];

    const supportedLangs = ['en', 'es'];

    const lang = supportedLangs.includes(browserLang)
      ? browserLang
      : 'en';

    this.translate.setDefaultLang('en');
    this.translate.use(lang);
  }
}
