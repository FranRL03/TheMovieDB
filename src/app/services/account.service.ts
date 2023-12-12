import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { AccountDetailsResponse } from '../models/account-details.interface';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { AddItemResponse } from '../models/add-item.interface';
import { environment } from '../../environments/environment.development';
import { ListsResponse } from '../models/getLists.interface';
import { AddListResponse } from '../models/add-list.interface';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.get<AccountDetailsResponse>(`${environment.baseUrl}/account?session_id=${sessionId}`,
      {
        headers: {
          accept: 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      });
  }


  getWatchListMovies(): Observable<MovieListResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.get<MovieListResponse>(`${environment.baseUrl}/account/${accountId}/watchlist/movies?api_key=${environment.apiKeyFran}&session_id=${sessionId}`)
  }
  getFavorites(): Observable<MovieListResponse> {
    let sessionId = localStorage.getItem('SESSION_ID');
    let accountId = localStorage.getItem('ACCOUNT_ID');

    return this.http.get<MovieListResponse>(
      `${environment.baseUrl}/account/${accountId}/favorite/movies?session_id=${sessionId}`,
      {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      });
  }

  getList(): Observable<ListsResponse> {
    let sessionId = localStorage.getItem('SESSION_ID');
    let accountId = localStorage.getItem('ACCOUNT_ID');
    return this.http.get<ListsResponse>(`https://api.themoviedb.org/3/account/${accountId}/lists?session_id=${sessionId}`,
      {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      })
  }

  addWatchListsMovies(id: number): Observable<AddItemResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.post<AddItemResponse>(`${environment.baseUrl}/account/${accountId}/watchlist?session_id=${sessionId}`,
      {
        "media_type": "movie",
        "media_id": id,
        "watchlist": true
      },
      {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      }
    );
  }

  addMovieToFovorites(movieId: number): Observable<AddItemResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.post<AddItemResponse>(`${environment.baseUrl}/account/${accountId}/favorite?session_id=${sessionId}`,
      {
        media_type: "movie",
        media_id: movieId,
        favorite: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      }
    )
  }

  addList(name: String, descripcion: String): Observable<AddListResponse> {
    return this.http.post<AddListResponse>(`${environment.baseUrl}/list`,
      {
        name: name,
        descripcion: descripcion
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      })
  }

  removeWatchListsMovies(id: number): Observable<AddItemResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.post<AddItemResponse>(`${environment.baseUrl}/account/${accountId}/watchlist?session_id=${sessionId}`,
      {
        "media_type": "movie",
        "media_id": id,
        "watchlist": false
      },
      {
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      }
    );
  }

  deleteMovieFromFovorites(movieId: number): Observable<AddItemResponse> {
    let accountId = localStorage.getItem('ACCOUNT_ID');
    let sessionId = localStorage.getItem('SESSION_ID');
    return this.http.post<AddItemResponse>(`${environment.baseUrl}/account/${accountId}/favorite?session_id=${sessionId}`,
      {
        media_type: "movie",
        media_id: movieId,
        favorite: false
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      }
    )
  }

  deleteSession() {
    const sessionId = localStorage.getItem('SESSION_ID') ?? '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.tmdbTokenFran}`
    });

    return this.http.delete(`${environment.baseUrl}/authentication/session`,
      {
        headers: headers,
        params: {
          session_id: sessionId
        }
      }
    );
  }


}



