import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie-list.interface';
import { SerieService } from '../../services/serie.service';


@Component({
  selector: 'app-page-serie-list',
  templateUrl: './page-serie-list.component.html',
  styleUrls: ['./page-serie-list.component.css']
})
export class PageSerieListComponent implements OnInit {

  serieList: Serie[] = [];
  pageNumber: number = 1;
  count: number = 0;
  currentPage: number = 1;

  constructor(private service: SerieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage() {
    this.service.getPopularListPage(this.pageNumber).subscribe(resp => {
      this.serieList = resp.results;
      this.count = resp.total_results;
    })

  }
}
