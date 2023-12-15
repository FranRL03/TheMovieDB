import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AddListResponse } from '../models/add-list.interface';
import { ListsResponse } from '../models/getLists.interface';
import { ListDetailsResponse } from '../models/list-details.interface';
import { AddItemResponse } from '../models/add-item.interface';

const API_BASE_URL = '/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getList(): Observable<ListsResponse> {
    let sessionId = localStorage.getItem('SESSION_ID');
    let accountId = localStorage.getItem('ACCOUNT_ID');
    return this.http.get<ListsResponse>(`https://api.themoviedb.org/3/account/${accountId}/lists?session_id=${sessionId}`,
      {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      });
  }

  addList(name: String, description: String): Observable<AddListResponse> {
    return this.http.post<AddListResponse>(`${environment.baseUrl}${API_BASE_URL}`,
      {
        name: name,
        description: description
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}${API_BASE_URL}`
        }
      });
  }

  getListId(id: number): Observable<ListDetailsResponse> {
    return this.http.get<ListDetailsResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}`,
      {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      });
  }

  deleteList(id: number): Observable<AddItemResponse> {
    return this.http.delete<AddItemResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}`,
    {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${environment.tmdbTokenFran}`
      }
    });
  }
}
