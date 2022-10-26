import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from '../Models/requests.model';
import { environment } from 'src/environments/environment';
import { Orders } from '../Models/orders.model';
import { Invoice } from '../Models/invoiceList.models';
import { afterWash } from '../Models/washComplete.model';
import { acceptRequest } from '../Models/AcceptRequest.model';
import { Profile } from '../Models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class WasherApiService {

  constructor(private http : HttpClient) { }

  //the dev environment folder has the base url ---> https://localhost:7112/api
  //to this we add /this._url ---> /Washer
  //then we manually give the path for the hhtp method as a string.
  _url = "Washer";
  invoice = "invoice-details";

  //Get method to get the washer profile from DB
  getProfile(id : any): Observable<Profile>{
    return this.http.get<Profile>(`${environment.apiUrl}/${this._url}/view-profile/${id}`);
  }

  //update method to edit washer profile
  updateProfile(id : any, data : any){
    return this.http.put(`${environment.apiUrl}/${this._url}/edit-profile/${id}`,data);
  }

  //Get method to send the list of requests having status as PENDING to the UI
  getRequests() : Observable<Requests[]>{
    return this.http.get<Requests[]>(`${environment.apiUrl}/${this._url}/requests`);
  }

  //Get method to send the list of current orders to the UI
  getCurrentOrders() : Observable<Orders[]>{
    return this.http.get<Orders[]>(`${environment.apiUrl}/${this._url}/current-orders`);
  }

  //Get method to send the list of past orders to the UI
  getPastOrders() : Observable<Orders[]>{
    return this.http.get<Orders[]>(`${environment.apiUrl}/${this._url}/past-orders`);
  }

  //Get method to get the list of invoices to be sent
  getInvoiceList() : Observable<Invoice[]>{
    return this.http.get<Invoice[]>(`${environment.apiUrl}/${this._url}/invoice-details`);
  }

  //Post method to post after wash details to DB
  postInvoiceDetails(data : afterWash){
    return this.http.post(`${environment.apiUrl}/${this._url}/wash-complete`,data);
  }

  //Post method for when washer accepts a wash request
  postWashRequest(data : acceptRequest){
    return this.http.post(`${environment.apiUrl}/${this._url}/accept-request`,data);
  }
}
