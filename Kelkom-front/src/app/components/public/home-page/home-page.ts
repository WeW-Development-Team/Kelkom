import { AfterContentChecked, AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarouselImage } from '../../../models/image-model';
import { Carousel } from "../../shared/carousel/carousel";
import { CardComponent } from './card/card.component';
import { CardInfo } from './card/card.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home-page',
  imports: [Carousel, TranslateModule, CardComponent, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements AfterViewInit, AfterContentChecked {
  

  @ViewChild('bannerVideo') video!: ElementRef<HTMLVideoElement>;
  private readonly translate = inject(TranslateService);

  private imagesPath = 'assets/media/images/';

  private imagesWidth = 800;
  private imagesHeight = 500;

  public imageList: CarouselImage[] = [
    {
      title: 'Streamer Girl - Running',
      path: `${this.imagesPath}RunningCycle.gif`,
      caption: '',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff'
    },
    {
      title: 'Streamer Girl - Attacking',
      path: `${this.imagesPath}BasicAttackMix.gif`,
      caption: '',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff'
    },
    {
      title: 'Streamer Girl - Dash',
      path: `${this.imagesPath}Dash.gif`,
      caption: '',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff'
    },
  ];

  public cardList: CardInfo[] = [];

  ngAfterViewInit() {
    const v = this.video.nativeElement;
    v.muted = true;
    v.play().catch(() => { });
  }
  
  ngAfterContentChecked(): void {
    this.cardList = [
      {
        size: "300px",
        title: this.translate.instant('HOME.ABOUT.CARD1.title'),
        text: this.translate.instant('HOME.ABOUT.CARD1.text'),
      },
      {
        size: "300px",
        title: this.translate.instant('HOME.ABOUT.CARD2.title'),
        text: this.translate.instant('HOME.ABOUT.CARD2.text'),
      },
      {
        size: "600px",
        title: this.translate.instant('HOME.ABOUT.CARD3.title'),
        text: this.translate.instant('HOME.ABOUT.CARD3.text'),
      },
    ];
  }
}
