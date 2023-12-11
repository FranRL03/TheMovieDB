import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-page-movie-list',
  templateUrl: './page-movie-list.component.html',
  styleUrls: ['./page-movie-list.component.css']
})
export class PageMovieListComponent implements OnInit {
  movieList: Movie[] = [];
  pageNumber: number = 1;
  count: number = 0;
  currentPage: number = 1;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.service.getPopularListPage(this.pageNumber).subscribe(resp => {
      this.movieList = resp.results;
      this.count = resp.total_results;
    })

  }
}
