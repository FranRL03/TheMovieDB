import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsResponse } from '../../../models/movie-details.interface';
import { MovieService } from '../../../services/movie.service';


@Component({
  selector: 'app-some-details',
  templateUrl: './some-details.component.html',
  styleUrls: ['./some-details.component.css']
})
export class SomeDetailsComponent implements OnInit {

  @Input() movie!: MovieDetailsResponse;
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private service: MovieService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getMovieId(this.id).subscribe(resp => {
      this.movie = resp;
    });
  
  }
  
}
