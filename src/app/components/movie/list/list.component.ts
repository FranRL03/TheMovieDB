import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../../models/getLists.interface';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{

  @Input() list!: List;

}
