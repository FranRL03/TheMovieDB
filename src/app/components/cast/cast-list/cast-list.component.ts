import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cast } from '../../../models/credits.interface';



@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.css']
})
export class CastListComponent {

  @Input() cast!: Cast;
  id!: number

  constructor(private router: Router) { }

  getImage() {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${this.cast.profile_path}`
  }
  actorDetails(id: number) {
    this.router.navigate([`/page-actor-details/${id}`]);
  }
}
