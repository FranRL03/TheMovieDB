import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieListResponse } from '../models/serie-list.interface';
import { environment } from '../../environments/environment.development';
import { SerieDetailsResponse } from '../models/serie-details.interface';
import { SerieVideosResponse } from '../models/serie-videos.interface';
import { CreditsResponse } from '../models/credits.interface';
import { SeasonDetailsResponse } from '../models/serie-season.interface';
import { ReviewsResponse } from '../models/reviews.interface';

const API_BASE_URL = '/tv';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getPopularList(): Observable<SerieListResponse> {
    return this.http.get<SerieListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyFran}`);
  }
  getPopularListPage(page: number): Observable<SerieListResponse> {
    return this.http.get<SerieListResponse>(`${environment.baseUrl}${API_BASE_URL}/popular?api_key=${environment.apiKeyFran}&page=${page}`);
  }

  getSerieId(id: number): Observable<SerieDetailsResponse> {
    return this.http.get<SerieDetailsResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}?api_key=${environment.apiKeyFran}`)
  }

  getVideoById(id: number): Observable<SerieVideosResponse> {
    return this.http.get<SerieVideosResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}/videos?api_key=${environment.apiKeyFran}`)
  }

  getCast(id: number): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}/credits?api_key=${environment.apiKeyFran}`)
  }

  getSeason(idSerie: number, seasonNumber: number): Observable<SeasonDetailsResponse> {
    return this.http.get<SeasonDetailsResponse>(`${environment.baseUrl}${API_BASE_URL}/${idSerie}/season/${seasonNumber}?api_key=${environment.apiKeyFran}`)
  }

  getReviews(id: number): Observable<ReviewsResponse> {
    return this.http.get<ReviewsResponse>(`${environment.baseUrl}${API_BASE_URL}/${id}/reviews?api_key=${environment.apiKeyFran}`)
  }
}
