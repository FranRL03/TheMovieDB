import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieDetailsResponse } from '../../../models/serie-details.interface';
import { SerieService } from '../../../services/serie.service';


@Component({
  selector: 'app-some-details-serie',
  templateUrl: './some-details-serie.component.html',
  styleUrls: ['./some-details-serie.component.css']
})
export class SomeDetailsSerieComponent implements OnInit {

  @Input() serie!: SerieDetailsResponse;
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private service: SerieService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getSerieId(this.id).subscribe(resp => {
      this.serie = resp;
    });

  }

}
