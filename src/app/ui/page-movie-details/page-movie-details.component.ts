import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from '../../models/credits.interface';
import { Reviews } from '../../models/reviews.interface';
import { MovieService } from '../../services/movie.service';



@Component({
  selector: 'app-page-movie-details',
  templateUrl: './page-movie-details.component.html',
  styleUrls: ['./page-movie-details.component.css']
})
export class PageMovieDetailsComponent implements OnInit {
  castList: Cast[] = [];
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  reviewList: Reviews[] = [];

  director: Cast | undefined;

  constructor(private service: MovieService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getCast(this.id).subscribe(resp => {
      this.castList = resp.cast;
    });

    this.service.getReviews(this.id).subscribe(resp => {
      this.reviewList = resp.results;
    });

    this.service.getCast(this.id).subscribe(creditsResp => {
      this.director = creditsResp.crew.find((member: Cast) => member.job === 'Director');
    });
  }

  getImgDirector() {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${this.director?.profile_path}`
  }
}
