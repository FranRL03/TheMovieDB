import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie-list.interface';
import { MovieService } from '../../../services/movie.service';


@Component({
  selector: 'app-full-with-carrusell',
  templateUrl: './full-with-carrusell.component.html',
  styleUrls: ['./full-with-carrusell.component.css']
})
export class FullWithCarrusellComponent implements OnInit {
  prueba() {
    console.log('funciona')
  }

  movie!: Movie;
  movieList: Movie[] = [];
  movies: Movie[] = [];

  constructor(private service: MovieService) { }

  bannerResult: any = [];

  ngOnInit(): void {
    this.service.getPopularList().subscribe(resp => {
      this.movieList = resp.results;
      this.movies = this.movieList.slice(0, 4);
      console.log(this.movies)
    });
  }
}
