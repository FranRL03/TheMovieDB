import { Component, Input } from '@angular/core';
import { Item, ListDetailsResponse } from '../../../models/list-details.interface';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-list-item-details',
  templateUrl: './list-item-details.component.html',
  styleUrl: './list-item-details.component.css'
})
export class ListItemDetailsComponent {

  @Input() listDetails!: Item;
  @Input() movieIndex!: number;

  constructor(private router: Router) { 
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    });
  }

  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_multi_faces${this.listDetails.backdrop_path}`
  }

  movieDetails(id: number) {

    if (this.listDetails.media_type === 'movie') {
      this.router.navigate([`/page-movie-details/${id}`]);
    } else {
      this.router.navigate([`/page-serie-details/${id}`]);
    }
  }
}
