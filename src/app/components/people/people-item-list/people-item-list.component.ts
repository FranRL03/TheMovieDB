import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../../../models/people-list.interface';

@Component({
  selector: 'app-people-item-list',
  templateUrl: './people-item-list.component.html',
  styleUrls: ['./people-item-list.component.css']
})
export class PeopleItemListComponent {

  @Input() actor!: People;
  id!: number;

  constructor(private router: Router) { }

  getImage() {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${this.actor.profile_path}`
  }

  peopleDetails(id: number) {
    console.log(this.actor.id);
    this.router.navigate([`/page-actor-details/${id}`]);
  }
}
