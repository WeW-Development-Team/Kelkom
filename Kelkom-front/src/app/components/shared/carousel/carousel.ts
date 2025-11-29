import { Component, Input } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselImage } from '../../../models/image-model';

@Component({
  selector: 'carousel',
  imports: [NgbCarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  //Path to img
  @Input() images:CarouselImage [] = [];
}
