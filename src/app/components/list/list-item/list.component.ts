import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../../models/getLists.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() list!: List;

  listDetails() {
    console.log('Detalles de la lista con ID ' + this.list.id);
  }

}
