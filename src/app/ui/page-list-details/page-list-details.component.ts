import { Component, Input, OnInit, TemplateRef, inject } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Item } from '../../models/list-details.interface';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/getLists.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-page-list-details',
  templateUrl: './page-list-details.component.html',
  styleUrl: './page-list-details.component.css'
})
export class PageListDetailsComponent implements OnInit {

  listMovies: Item[] = [];
  @Input() list!: List;
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);


  constructor(private serviceList: ListService, private modalService: NgbModal) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.serviceList.getListId(this.id).subscribe(resp => {
      this.listMovies = resp.items;
    })
  }

  getUsername() {
    return localStorage.getItem('USERNAME');
  }
  getAvatar() {
    return localStorage.getItem('AVATAR');
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  delete(){
    console.log('Lista con ID ' + this.id + ' borrada');
    this.serviceList.deleteList(this.id).subscribe();
    window.location.href = `http://localhost:4200/page-profile`
  }

  clear(){
    console.log('Lista con ID ' + this.id + ' limpia');
    this.serviceList.clearList(this.id).subscribe();
    // window.location.reload();
  }

}
