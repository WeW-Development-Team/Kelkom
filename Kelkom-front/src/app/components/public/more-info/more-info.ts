import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'more-info',
  imports: [TranslateModule],
  templateUrl: './more-info.html',
  styleUrl: './more-info.scss',
})
export class MoreInfo implements OnInit {

  ngOnInit(): void {
    window.scrollTo({top:0, behavior: 'smooth'});
  }

}
