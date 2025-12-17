import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'legal',
  imports: [],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal implements OnInit {
  private readonly route = inject(ActivatedRoute);
  
  public legalId = 0;

  ngOnInit(): void {
    window.scrollTo({top:0, behavior: 'smooth'});
    this.route.paramMap.subscribe(params => {
      this.legalId = Number(params.get('id'));
    });
  }
 
  
}
