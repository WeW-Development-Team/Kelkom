import { Component } from '@angular/core';
import { TopNav } from '../../shared/top-nav/top-nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'public-layout',
  imports: [TopNav, RouterOutlet],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {}
