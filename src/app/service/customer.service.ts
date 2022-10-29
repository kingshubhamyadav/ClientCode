import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { allWasher } from '../Models/allWasher';
import { Checkout } from '../Models/checkout';
import { GetUser } from '../Models/getUser';
import { orderHistory } from '../Models/orderHistory';
import { PromoCode } from '../Models/promoCode';
import { washType } from '../Models/washType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseApiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllWashType(): Observable<washType[]> {
    return this.http.get<washType[]>(this.baseApiUrl + '/Customer/OurServices');
  }

  public getPromoCode(promo: PromoCode): Observable<string> {
    return this.http.post(this.baseApiUrl + '/Customer/CheckPromocode', promo,
      { responseType: 'text' }
    );
  }

  public checkoutInfo(checkout: Checkout): Observable<Checkout> {
    return this.http.post<Checkout>(this.baseApiUrl + '/Customer/StoreOrderDetail', checkout);
  }

  public getOrdersHistory(userId: number): Observable<orderHistory[]> {
    return this.http.get<orderHistory[]>(this.baseApiUrl + '/Customer/OrderHistory/' + userId);
  }

  public getAllWasher(): Observable<allWasher[]> {
    return this.http.get<allWasher[]>(this.baseApiUrl + '/Customer/GetWasher');
  }

  public getUser(userId: number): Observable<GetUser> {
    return this.http.get<GetUser>(this.baseApiUrl + `/Customer/view-profile/${userId}`);
  }

  updateProfile(id: any, data: any) {
    return this.http.put(`${this.baseApiUrl}/Customer/edit-profile/${id}`, data);
  }

  //post method to upload photo to DB
  uploadPhoto(data: any) {
    return this.http.post(`${this.baseApiUrl}/Customer/upload-profile-img`, data);
  }
}
