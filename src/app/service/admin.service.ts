import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatePromocode } from '../Models/createPromo';
import { CreateService } from '../Models/createService';
import { CreateWasher } from '../Models/createWasher';
import { GetAllCustomer } from '../Models/getAllCustomer';
import { GetAllWasher } from '../Models/getAllWasher';
import { GetPromoCode } from '../Models/getPromoCode';
import { acceptRequest } from '../Models/AcceptRequest.model';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseApiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public createPromocode(promo: CreatePromocode): Observable<CreatePromocode> {
    return this.http.post<CreatePromocode>(this.baseApiUrl + '/Admin/CreatePromocode', promo
    );
  }

  public createWasher(user: CreateWasher): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/Admin/CreateWasher', user);
  }

  public createService(ser: CreateService): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/Admin/CreateServices', ser);
  }

  public getAllWasher(): Observable<GetAllWasher[]> {
    return this.http.get<GetAllWasher[]>(this.baseApiUrl + '/Admin/GetWasher');
  }

  public getAllCustomer(): Observable<GetAllCustomer[]> {
    return this.http.get<GetAllCustomer[]>(this.baseApiUrl + '/Admin/GetCustomer');
  }

  public getPendingOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseApiUrl + '/Admin/PendingOrder');
  }

  public getAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseApiUrl + '/Admin/AllOrder');
  }

  public getAllPromocode(): Observable<GetPromoCode[]> {
    return this.http.get<GetPromoCode[]>(this.baseApiUrl + '/Admin/AllPromocode');
  }

  //Post method for when washer accepts a wash request
  postWashRequest(data: acceptRequest) {
    return this.http.post(`${this.baseApiUrl}/Admin/accept-request`, data);
  }

  getUserId(name: any) {
    return this.http.get(`${this.baseApiUrl}/Admin/get-customer-id/${name}`);
  }

  //post method to send mail to customer once washer accepts order.
  sendEmail(email: any) {
    return this.http.post(`${environment.apiUrl}/Email`, email);
  }
}
