import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front';

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.enableScrollToTopOnRouteChange();
  }

  private enableScrollToTopOnRouteChange(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.elementRef.nativeElement.scrollIntoView();
      }
    });
  }
}
