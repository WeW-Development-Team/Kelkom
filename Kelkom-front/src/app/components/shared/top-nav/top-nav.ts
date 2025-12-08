import { Component, Input } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Tab } from '../../../models/tab-model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'top-nav',
  imports: [RouterLink],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {}
