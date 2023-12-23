import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../../models/getLists.interface';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() list!: List;

  constructor(private router: Router) { 
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    });
  }

  listDetails(id: number) {
    console.log('Detalles de la lista con ID ' + this.list.id);
    this.router.navigate([`/page-list/${id}`]);
  }

}
