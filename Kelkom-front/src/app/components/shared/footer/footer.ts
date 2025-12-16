import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bottom-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(private router: Router) { }

  goToLegal(id: number) {
    this.router.navigate(
      ['public/legal']
    );
  }
}
