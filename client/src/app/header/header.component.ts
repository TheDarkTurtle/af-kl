import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title$: Observable<string>;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.title$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => this.getTitleFromUrl(event.url))
    );
  }

  getTitleFromUrl(url: string) {
    switch (url) {
      case '/booking':
        return 'Booking details';
      default:
        return 'Check-in';
    }
  }
}
