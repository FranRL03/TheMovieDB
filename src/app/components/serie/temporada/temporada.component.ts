import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieDetailsResponse, Season } from '../../../models/serie-details.interface';
import { SerieService } from '../../../services/serie.service';


@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styleUrls: ['./temporada.component.css']
})
export class TemporadaComponent implements OnInit {

  @Input() serie!: SerieDetailsResponse;
  id!: number;
  temporada!: Season;
  route: ActivatedRoute = inject(ActivatedRoute);
  lastSeason!: string;

  constructor(private service: SerieService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getSerieId(this.id).subscribe(resp => {
      this.serie = resp;
      this.temporada = this.serie.seasons[this.serie.seasons.length - 1];
    });
  }

  getImageSeason() {
    return `https://www.themoviedb.org/t/p/w130_and_h195_bestv2${this.temporada.poster_path}`
  }

}
