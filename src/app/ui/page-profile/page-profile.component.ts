import { Component, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Movie } from '../../models/movie-list.interface';
import { AccountService } from '../../services/account.service';
import { List } from '../../models/getLists.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListDetailsResponse } from '../../models/list-details.interface';
import { Router } from '@angular/router';
import { AddListResponse } from '../../models/add-list.interface';
import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  active = 1;
  movieListFavorite: Movie[] = [];
  movieListWatchList: Movie[] = [];
  movieLists: List[] = [];

  pageNumberFavorite: number = 1;
  pageNumberWatchList: number = 1;
  pageNumberList: number = 1;


  countFavorite: number = 0;
  countWatchList: number = 0;
  countList: number = 0;

  name!: string;
  description!: string;

  constructor(private accountService: AccountService, private modalService: NgbModal, private route: Router, private service: ListService) { }

  ngOnInit(): void {
    this.accountService.getFavorites().subscribe(resp => {
      this.movieListFavorite = resp.results;
      const favoriteIds = this.movieListFavorite.map(movie => movie.id);
      localStorage.setItem('FAVORITE_IDS', favoriteIds.toString());
    });
    this.accountService.getWatchListMovies().subscribe(resp => {
      this.movieListWatchList = resp.results;
      const watchListsIds = this.movieListWatchList.map(movie => movie.id);
      localStorage.setItem('WATCHLISTS_IDS', watchListsIds.toString());
    });
    this.service.getList().subscribe(resp => {
      this.movieLists = resp.results;
    });
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

  addList() {
    this.service.addList(this.name, this.description).subscribe((x: AddListResponse) => {
      console.log('Lista ' + x.list_id + ' añadida');
      window.location.reload();
    });
  }
}
