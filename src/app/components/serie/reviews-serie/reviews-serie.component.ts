import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from '../../../models/reviews.interface';
import { SerieService } from '../../../services/serie.service';


@Component({
  selector: 'app-reviews-serie',
  templateUrl: './reviews-serie.component.html',
  styleUrls: ['./reviews-serie.component.css']
})
export class ReviewsSerieComponent {

  @Input() review!: Reviews;
  mostrar: boolean = true
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);


  constructor(private service: SerieService) {
    this.id = this.route.snapshot.params['id'];
  }

  getImage() {
    return `https://www.themoviedb.org/t/p/w45_and_h45_face${this.review.author_details.avatar_path}`
  }

}
