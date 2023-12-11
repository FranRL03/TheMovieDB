import { Component } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-page-upcoming-list',
  templateUrl: './page-upcoming-list.component.html',
  styleUrls: ['./page-upcoming-list.component.css']
})
export class PageUpcomingListComponent {
  upcomingList: Movie[] = [];
  pageNumber: number = 1;
  count: number = 0;
  currentPage: number = 1;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.service.getUpcomingList(this.pageNumber).subscribe(resp => {
      this.upcomingList = resp.results;
      this.count = resp.total_results;
    })

  }
}
