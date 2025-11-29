import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPublicPage } from './main-public-page';

describe('LandingPage', () => {
  let component: MainPublicPage;
  let fixture: ComponentFixture<MainPublicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPublicPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPublicPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
