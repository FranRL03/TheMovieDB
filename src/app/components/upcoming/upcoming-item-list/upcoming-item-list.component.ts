import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../../models/movie-list.interface';

@Component({
  selector: 'app-upcoming-item-list',
  templateUrl: './upcoming-item-list.component.html',
  styleUrls: ['./upcoming-item-list.component.css']
})
export class UpcomingItemListComponent {
  @Input() movie!: Movie;

  constructor(private router: Router) { }

  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
  }
  movieDetails(id: number) {
    console.log(this.movie.id);
    this.router.navigate([`/page-movie-details/${id}`]);
  }

}
