import { Component } from '@angular/core';
import { Carousel } from "../../shared/carousel/carousel";
import { CarouselImage } from '../../../models/image-model';

@Component({
  selector: 'app-home-page',
  imports: [Carousel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

  private imagesPath = 'assets/media/images/';

  private imagesWidth = 800;
  private imagesHeight = 500;

  public imageList: CarouselImage[] = [
    {
      title: 'Charger Draft',
      path: `${this.imagesPath}charger.png`,
      caption: 'An early draft of a playable boss.',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff'
    },
    {
      title: 'Assassin Draft',
      path: `${this.imagesPath}assassin.png`,
      caption: 'An early draft of a playable boss.',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff'
    },
    {
      title: 'Silhouettes v1',
      path: `${this.imagesPath}silhouettes.png`,
      caption: 'Silhouetting the concepts helpt understand how to  proceed with the drafts',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff'
    },
    {
      title: 'Silhouettes v2',
      path: `${this.imagesPath}silhouettes2.png`,
      caption: 'Silhouetting the concepts helpt understand how to  proceed with the drafts',
      width: this.imagesWidth,
      height: this.imagesHeight,
      textColor: '#fff'
    }
  ];

}
