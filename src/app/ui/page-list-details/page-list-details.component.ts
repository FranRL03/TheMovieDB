import { Component, OnInit, inject } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Item } from '../../models/list-details.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list-details',
  templateUrl: './page-list-details.component.html',
  styleUrl: './page-list-details.component.css'
})
export class PageListDetailsComponent implements OnInit{

  listMovies: Item [] = [];
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);


  constructor(private serviceList: ListService){
    this.id = this.route.snapshot.params['id'];
  }

ngOnInit(): void {
  this.serviceList.getListId(this.id).subscribe( resp =>{
    this.listMovies = resp.items;
  })
}

}
