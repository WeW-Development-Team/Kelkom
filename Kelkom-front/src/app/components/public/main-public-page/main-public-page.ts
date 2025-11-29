import { Component } from '@angular/core';
import { TopNav } from '../../shared/top-nav/top-nav';
import { Tab } from '../../../models/tab-model';
import { News } from '../news/news';
import { Forum } from '../forum/forum';
import { Support } from '../support/support';
import { Social } from '../social/social';
import { HomePage } from '../home-page/home-page';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'main-public-page',
  imports: [TopNav, Footer],
  templateUrl: './main-public-page.html',
  styleUrl: './main-public-page.scss',
})
export class MainPublicPage {

  //Top bar navigation tabs:
  public tabList: Tab[] = [
    {
      name: 'Home',
      content: HomePage
    },
    {
      name: 'Forum',
      content: Forum
    },
    {
      name: 'News',
      content: News
    },
    {
      name: 'Support',
      content: Support
    },
    {
      name: 'Social',
      content: Social
    }
  ];


}
