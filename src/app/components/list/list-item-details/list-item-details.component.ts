import { Component, Input } from '@angular/core';
import { Item, ListDetailsResponse } from '../../../models/list-details.interface';

@Component({
  selector: 'app-list-item-details',
  templateUrl: './list-item-details.component.html',
  styleUrl: './list-item-details.component.css'
})
export class ListItemDetailsComponent {

  @Input() listDetails!: Item;
  @Input() movieIndex!: number;

  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_multi_faces${this.listDetails.backdrop_path}`
  }
}
