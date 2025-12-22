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

  private imagesPath = 'assets/media/images/carousel/';

  private imagesWidth = 800;
  private imagesHeight = 500;

  public imageList: CarouselImage[] = [
    {
      title: 'Streamer Girl - Running',
      path: `${this.imagesPath}RunningCycle.gif`,
      caption: '',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Streamer Girl - Attacking',
      path: `${this.imagesPath}BasicAttackMix.gif`,
      caption: '',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Streamer Girl - Dash',
      path: `${this.imagesPath}Dash.gif`,
      caption: '',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Streamer Girl - Concepts',
      path: `${this.imagesPath}Streamer-concepts.png`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'First animations',
      path: `${this.imagesPath}initial-anims.gif`,
      caption: '',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Re-charge boss',
      path: `${this.imagesPath}charger.png`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Assassin boss',
      path: `${this.imagesPath}assassin.png`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Charger boss',
      path: `${this.imagesPath}silhouettes.png`,
      caption: '',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Charger boss - more concepts',
      path: `${this.imagesPath}charger-concept.png`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Worm boss initial',
      path: `${this.imagesPath}worm-initial.png`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'UI - concept',
      path: `${this.imagesPath}UI-Mockup.png`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Boss defeated animation',
      path: `${this.imagesPath}boss_defeated.gif`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Main menu concept',
      path: `${this.imagesPath}main-menu-draft.png`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage:  true
    },
    {
      title: 'Main menu Animation',
      path: `assets/media/video/mainMenu.mp4`,
      caption: '',
      width: window.screen.width < 670 ? 400 : this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff',
      isImage: false
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
