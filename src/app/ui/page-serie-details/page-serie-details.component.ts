import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from '../../models/credits.interface';
import { Reviews } from '../../models/reviews.interface';
import { SerieService } from '../../services/serie.service';


@Component({
  selector: 'app-page-serie-details',
  templateUrl: './page-serie-details.component.html',
  styleUrls: ['./page-serie-details.component.css']
})
export class PageSerieDetailsComponent implements OnInit {

  castList: Cast[] = [];
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  director: Cast | undefined;
  reviewList: Reviews[] = [];

  constructor(private service: SerieService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getCast(this.id).subscribe(resp => {
      this.castList = resp.cast;
    });

    this.service.getCast(this.id).subscribe(creditsResp => {
      this.director = creditsResp.crew.find((member: Cast) => member.job === 'Executive Producer');
    });

    this.service.getReviews(this.id).subscribe(resp => {
      this.reviewList = resp.results;
    });
  }

  getImgDirector() {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${this.director?.profile_path}`
  }
}
