import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse } from '../models/people-list.interface';
import { environment } from '../../environments/environment.development';
import { PeopleDetailsResponse } from '../models/people-details.interface';
import { PeopleDetailsMoviesResponse } from '../models/people-details-movies.interface';

const API_BASE_URL = '/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getActorList(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyFran}`);
  }

  getActorsListPage(page: number): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyFran}&page=${page}`);
  }

  getPeopleById(id: number): Observable<PeopleDetailsResponse> {
    return this.http.get<PeopleDetailsResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}?api_key=${environment.apiKeyFran}`)
  }
  getPeopleMovies(id: number): Observable<PeopleDetailsMoviesResponse> {
    return this.http.get<PeopleDetailsMoviesResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}/combined_credits?api_key=${environment.apiKeyFran}`)
  }

}
