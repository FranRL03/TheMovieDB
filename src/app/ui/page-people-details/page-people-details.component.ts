import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCast } from '../../models/people-details-movies.interface';
import { PeopleDetailsResponse } from '../../models/people-details.interface';
import { PeopleService } from '../../services/people.service';


@Component({
  selector: 'app-page-people-details',
  templateUrl: './page-people-details.component.html',
  styleUrls: ['./page-people-details.component.css']
})
export class PagePeopleDetailsComponent implements OnInit {
  peopleId!: number;
  peopleDetails!: PeopleDetailsResponse;
  movieList: MovieCast[] = [];


  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.peopleId = +idParam;
        this.peopleService.getPeopleById(this.peopleId).subscribe(resp => {
          this.peopleDetails = resp;
        });
      }
    });
    this.peopleService.getPeopleMovies(this.peopleId).subscribe(resp => {
      this.movieList = resp.cast;
    })
  }

  getImage() {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${this.peopleDetails.profile_path}`
  }
}
