import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../../models/getLists.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() list!: List;

  constructor(private router: Router) { }

  listDetails(id: number) {
    console.log('Detalles de la lista con ID ' + this.list.id);
    this.router.navigate([`/page-list/${id}`]);
  }

}
