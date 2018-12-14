import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://developers.zomato.com/api/v2.1';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'user-key': 'a9f4f55f6270dfacacb7844968665417'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLocations(searchInput): Observable<any> {
    const endpointUrl = `${API_URL}/locations?query=${searchInput}`;
    return this.http.get<any>(endpointUrl, HTTP_OPTIONS);
  }

  getEstablishments(cityId): Observable<any> {
    const endpointUrl = `${API_URL}/establishments?city_id=${cityId}`;
    return this.http.get<any>(endpointUrl, HTTP_OPTIONS);
  }

  getRestaurants(estId): Observable<any> {
    const endpointUrl = `${API_URL}/establishment_type=${estId}`;
    return this.http.get<any>(endpointUrl, HTTP_OPTIONS);
  }
}
