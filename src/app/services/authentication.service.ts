import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { GetRequestTokenResponse } from '../models/get-request-token.interface';
import { CreateSesionResponse } from '../models/create-sesion.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getRequestToken(): Observable<GetRequestTokenResponse> {
    return this.http.get<GetRequestTokenResponse>(`${environment.baseUrl}/authentication/token/new`, {
      headers: {
        'Authorization': `Bearer ${environment.tmdbTokenFran}`
      }
    });
  }
  createSession(token: string): Observable<CreateSesionResponse> {
    return this.http.post<CreateSesionResponse>(`${environment.baseUrl}/authentication/session/new`,
      {
        request_token: token
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.tmdbTokenFran}`
        }
      }
    );
  }

}
