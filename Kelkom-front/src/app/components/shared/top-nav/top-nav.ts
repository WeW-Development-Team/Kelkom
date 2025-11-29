import { Component, Input } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Tab } from '../../../models/tab-model';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'top-nav',
  imports: [NgbNavModule, NgComponentOutlet],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {
  @Input() tabList: Tab[] = [];

}
