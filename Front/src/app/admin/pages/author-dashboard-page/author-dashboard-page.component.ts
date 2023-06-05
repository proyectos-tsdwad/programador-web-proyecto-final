import { Component } from '@angular/core';
import { Author } from 'src/app/models/author/author-model';
import { AuthorDashboardService } from '../../services/author/author-dashboard.service';

@Component({
  selector: 'app-author-dashboard-page',
  templateUrl: './author-dashboard-page.component.html',
  styleUrls: ['./author-dashboard-page.component.css']
})
export class AuthorDashboardPageComponent {

  authors: Author[] = [];

  constructor(
    private authorService: AuthorDashboardService
  ) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAllAuthors()
      .subscribe((result: Author[]) => {
        this.authors = result;
      });
  }
}
