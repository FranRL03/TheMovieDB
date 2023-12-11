import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from '../../../models/serie-list.interface';


@Component({
  selector: 'app-serie-item-list',
  templateUrl: './serie-item-list.component.html',
  styleUrls: ['./serie-item-list.component.css']
})
export class SerieItemListComponent {
  @Input() serie!: Serie;
  id!: number

  constructor(private router: Router) { }

  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.serie.poster_path}`
  }

  SerieDetails(id: number) {
    console.log(this.serie.id);
    this.router.navigate([`/page-serie-details/${id}`]);
  }
}
