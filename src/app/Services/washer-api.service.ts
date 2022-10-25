import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from '../Models/requests.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WasherApiService {

  constructor(private http : HttpClient) { }

  _url = "Washer";

  getRequests() : Observable<Requests[]>{
    return this.http.get<Requests[]>(`${environment.apiUrl}/${this._url}/requests`);
  }
}
