import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselImage } from '../../../models/image-model';

@Component({
  selector: 'carousel',
  imports: [NgbCarouselModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @Input() images:CarouselImage [] = [];

  ngAfterViewInit() {
    const v = this.video.nativeElement;
    v.muted = true;
    v.play().catch(() => { });
  }
}
