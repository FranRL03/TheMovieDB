import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieCast } from '../../../models/people-details-movies.interface';

@Component({
  selector: 'app-movie-item-details-actor',
  templateUrl: './movie-item-details-actor.component.html',
  styleUrls: ['./movie-item-details-actor.component.css']
})
export class MovieItemDetailsActorComponent {
  @Input() movie!: MovieCast;
  id!: number

  constructor(private router: Router) { }


  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
  }

  movieDetails(id: number) {
    console.log(this.movie.id);
    this.router.navigate([`/page-movie-details/${id}`]);
  }
}
